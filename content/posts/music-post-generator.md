---
title: "Sharing music painlessly"
tags: ["technical", "codelog"]
date: 2020-07-28T15:00:31Z
toc: false
draft: false
---

I've always struggled with sharing music. I listen to a _lot_ of it---sometimes more than eight hours per day---but for me, music has never been social. I can count on one hand the number of playlists I've shared with other people, for example, and I usually don't volunteer to be the DJ when I'm with friends.

I don't think there's any single cause for my hesitance to share music; I think it's a combination of 1) music services being incompatible with one another, 2) rarely being in situations with friends where me playing music out loud is appropriate, and 3) some degree of insecurity.

Yesterday, I decided to take a leap of faith and start publishing playlists on this site.

I didn't want to just post a link to a Spotify playlist, though, as I don't think that's a very flexible medium. Not everyone has Spotify, after all, and providing only a giant list of songs without any metadata or commentary (which is all a playlist is) feels like a lost opportunity. But on my end, building a playlist is by far the easiest way to assemble collections of music. So I set out to design a tool that transforms Spotify playlists into something I'd feel proud to post on this site.

## Design considerations

* **Not every genre, not all the time.** Sometimes, people just aren't in the mood to hear American country music or classical, for example. Normally, when you browse a playlist, there's no way to know the genre of a song until you play it. (And even then, it may not be immediatelly clear.) My system should group songs by genre (to the best of its ability) so that people can browse the genres they love, and skip the ones they don't.

* **Not platform specific.** If you use Apple Music, you can't play Spotify playlists. Some people don't use streaming services at all. No matter how they consume music, I want people to be able to browse the music I post. That will require me to list each song individually, so people can look it up by name, and to post multiple links to the song (I ended up choosing Spotify and YouTube).

* **Still convenient.** Picking out songs one by one is flexible, but not necessarily convenient. Sometimes people might want to just listen to the collection as one giant playlist. And so for the significant portion of people who use Spotify, I decided to post a link to the "source" playlist on Spotify (from which the post was generated).

## Building it

Broadly, my plan was to write a Python script that, given a Spotify playlist, outputs something I can paste into a post on my blog. This means that the project has roughly two parts: the part that gathers the necessary data from Spotify, and the part that assembles that data into a respectable post on my site.

### Connecting to Spotify

The first step was to connect to Spotify to get the playlist's songs, as well as metadata about those songs. This part was relatively straightforward --- the only challenge I ran into was that Spotipy, the Python library I used to connect to the Spotify API, tried to open the login flow using the built-in web browser, but I was working on a remote machine without a web browser.

```python
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import webbrowser

# This is to prevent Spotipy from trying to open a web browser
def no_browser(x):
    raise webbrowser.Error()
webbrowser.open = no_browser

scope = "user-library-modify user-library-read user-top-read"

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope, cache_path=".spotipy"))
```

Then, I wrote a few helper functions to extract the data I knew I'd need from the API.

```python
def song_data(song_id: str) -> dict:
    return sp.audio_features(song_id)

def artist_data(artist_id: str) -> dict:
    return sp.artist(artist_id)

def read_playlist(playlist_id: str) -> list:
    playlist = sp.playlist(playlist_id)
    return {
        "tracks": [track["track"] for track in playlist["tracks"]["items"]],
        "uri": playlist["external_urls"]["spotify"],
        "name": playlist["name"],
        "description": playlist["description"],
    }
```

With that, I was ready to move on to the part of the script that actually assembles the data.

### Assembling the data

The first step was to determine the playlist to process, the template to use when writing the post, and where to put the output. This is just a simple Python script, so I pull these from command line arguments.

```python
import api
import sys
import jinja2
import random

# Basic setup

if len(sys.argv) != 4:
    print("Usage: <playlist id> <template location> <output location>")

playlist = sys.argv[1]
template_loc = sys.argv[2]
output_loc = sys.argv[3]
```

(Why is the first argument at `sys.argv[1]`? That's because the full command to run this is `python3 <script_name> ...`; `<script_name>` is the zeroth/first argument.)

With the basic information collected, it's time for me to get the songs in the playlist from the Spotify API. Because of the helper functions we wrote earlier, this is simple:

```python
playlist = api.read_playlist(playlist)
```

Unfortunately, the data about each song returned by the Spotify API when processing a playlist is minimal. We need to go through each song and supplement its data with information about the artist and audio itself. As we go through each song and fill in the missing data, we're also going to add all the artist genres we see to a list called `genres`, and all the songs themselves to a list called `songs`. (Note that genres are stored according to each artist, not according to each song or album.)

```python
genres = []
tracks = []

for song in playlist["tracks"]:
    song_data = api.song_data(song["id"])[0]
    artist_data = api.artist_data(song["artists"][0]["id"])
    song.update(data=song_data, artist=artist_data,
                genres=artist_data["genres"] or [],
                genres_display=", ".join(artist_data["genres"] or []), artists_display=', '.join(
                    [artist["name"] for artist in song["artists"]]))
    genres.extend(artist_data["genres"])
    tracks.append(song)
```

Why are we keeping track of all the genres like this? Spotify takes a... maximalist approach to genres. Consider Brian Eno, who is listed under the following genres in Spotify's API: `ambient, art pop, art rock, compositional ambient, dance rock, drone, experimental, experimental ambient, fourth world, glam rock, minimalism`. When we group songs by genre on the resulting page, we need to look at the genres of the artist. Unfortunately, we can't just pick the first genre listed; instead, we need to pick the _most common_ genre listed, as that's likely to be the most useful to display. (If we picked the genre at random or only picked the first genre, we might have lots of genres with only one song listed. That would be hardly useful.)

Once we've gone through all the songs, we need to sort the genres by popularity. We can do this using a functional one-liner in Python. (I'm sure there is an easier way to do this; this is just the first thing I thought of.)

```python
genres = sorted(
    set(genres), key=lambda k: len(list(filter(lambda v: v == k, genres))), reverse=True)
```

Then, we can write a simple helper function to extract the most common genre ("main genre") from some list of genres:

```python
def main_genre(track_genres):
    for genre in genres:
        if genre in track_genres:
            return genre
    return "genreless"
```

Now, we're in a position to actually group all the songs by their genre! We're going to build the `genre_groups` dictionary, which is what we're eventually going to pass to our template builder.

```python
genre_groups = {}

for song in tracks:
    genre = main_genre(song["genres"])
    if not genre in genre_groups:
        genre_groups[genre] = []
    genre_groups[genre].append(song)
```

### Writing the post

Now that we've built a script to assemble the song data from Spotify, it's now time to write the code that uses that data to build a post. We're going to do this using [Jinja2](https://jinja.palletsprojects.com/) templating. (If you're not sure what templating is, read the first bit of the Jinja2 documentation.)

The first step is to load the template itself:

```python
with open(template_loc, "r") as infile:
    data = infile.read()
    template = jinja2.Template(data)
```

Then, assuming that the file at `template_loc` was loaded successfully, all we need to do now is build the template and write it to the output file location:

```python
with open(output_loc, "w") as outfile:
    outfile.write(template.render(genre_groups=genre_groups,
                                  track_count=len(playlist["tracks"]),
                                  genre_count=len(genres),
                                  playlist_link=playlist["uri"],
                                  genres_display=", ".join(genres)))
```

Of course, now it's time to write the tempate itself. This could look like anything, but here is what I came up with for this site (using Hugo shortcodes):

```markdown
Here are {{track_count}} songs across {{genre_count}} genres that I've been listening to lately.

To listen to this playlist on Spotify, [click here]({{playlist_link}}). Note that song metadata --- the genres, duration, release date, etc. --- is provided by the Spotify API. I don't input this information myself, so it might be wrong!

{% for genre, songs in genre_groups.items() %}
### {{genre | capitalize | replace("r&b", "R&B") | replace("idm", "IDM") }}
{% for song in songs %}
{% raw %}{{\<{% endraw %} song title="{{song.name}}" artists="{{ song.artists_display }}" album="{{song.album.name}}" date="{{song.album.release_date}}" preview="{{song.preview_url}}" duration="{{ song.data.duration_ms / 60}}" genres="{{song.genres_display}}" url="{{ song.external_urls.spotify}}" image="{{song.album.images.0.url}}" {% raw %}\>}}{% endraw %}
{% endfor %}
{% endfor %}
```

If you're curious about what `< song ... >` gets transformed into, that's done using [this Hugo shortcode](https://github.com/milesmcc/personal/blob/master/layouts/shortcodes/song.html) that I wrote. It's a bit too long to post here, but here's what it looks like rendered:

{{< song title="Pulses" artists="Steve Reich, Erik Hall" album="Music for 18 Musicians (Steve Reich) - Pulses + Section I" date="2020-02-25" preview="https://p.scdn.co/mp3-preview/0031ad223964fb32417c38f5060b968526ec587a?cid=4e157d7e8e51417495f3b0adf93907fc" duration="4214.533333333334" genres="american contemporary classical, avant-garde, classical, compositional ambient, contemporary classical, drone, minimalism" url="https://open.spotify.com/track/3yWRfVG5KyOqEyXh68GUK1" image="https://i.scdn.co/image/ab67616d0000b27328dc39e21b52f50b51679c1b" >}}

...and that's it! All I need to do is build a playlist and run my program, and it will generate content that I can then post on this site. The code is open source [on GitHub](https://github.com/milesmcc/musicauthor). Going forward, I'm going to try to periodically post playlists in the [Cool](/cool/) section. (Here's the [first playlist](/cool/music-july-22-2020/) I posted.)