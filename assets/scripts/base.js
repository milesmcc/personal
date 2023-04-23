import {listen} from 'quicklink';

window.addEventListener('load', () => {
    listen();
});

// Chaotic function to remove all stylesheets and set background color.
// Make everything look like a 90s website.
window.stripStyles = () => {
    // Remove all stylesheets
    const stylesheets = [...document.getElementsByTagName('link')];

    for(let sheet of stylesheets) {
        if(sheet.getAttribute("rel") == "stylesheet")
            sheet.parentNode.removeChild(sheet);
    }

    // Set background to #FEFED6 and make other changes to make it look like a 90s website.
    document.body.style.backgroundColor = '#FEFED6';
}