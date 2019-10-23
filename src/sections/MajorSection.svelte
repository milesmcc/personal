<script>
    import {
        slide
    } from 'svelte/transition';

    export let title;
    export let subtitle;
    export let hidden = true;
    export let first = false;
    
    const hr = false;

    let toggleHidden = () => hidden = !hidden;

    let toggleHiddenKeypress = (event) => {
        if(event.which !== 9 && event.which !== 16 && event.which !== 17) {
            toggleHidden();
        }else{
            document.activeElement.classList.add("keyboard-nav");
            console.log("making kbd")
        }
    }

    let unfocus = () => document.activeElement.blur();
</script>

<style>
    .accordion-top {
        cursor: pointer !important;
    }

    .collapsor {
        font-size: 120% !important;
        /* font-family: monospace; */
    }

    .collapsor {
        font-size: 30px;
        font-family: monospace;
    }

    section {
        /* background-color: #f4f4f4; */
        /* padding: 10px; */
        border-radius: 3px;
        margin-bottom: 10px;
        padding-bottom: 1em;
        font-size: 90%;
    }

    .content {
        color: black;
        padding: 16px 0 10px 0;
    }

    .subtitle {
        color: gray;
        font-size: 14px;
    }

    .title {
        font-weight: normal;
    }

    .mobile-subtitle {
        padding-bottom: 4px;
    }

    .smallbr {
        height: 0px;
    }
</style>

{#if first && hr}
<hr>
{/if}
{#if first && !hr}
<br class="smallbr">
{/if}
<section>
    <div class="accordion-top keyboard-nav" on:click={toggleHidden} on:click={unfocus} on:keydown={toggleHiddenKeypress} tabindex="0">
        <div class="level is-marginless is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <h5 class="title is-size-5 is-marginless" aria-label="Expand {title}">
                        {@html title}
                    </h5>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item is-hidden-touch">
                    <span class="subtitle">
                        {@html subtitle}
                    </span>
                </div>
                <div class="level-item">
                    {#if hidden}
                    <p class="collapsor title">+</p>
                    {:else}
                    <p class="collapsor title" hidden={hidden}>-</p>
                    {/if}
                </div>
            </div>
        </div>
        <div class="is-hidden-desktop mobile-subtitle">
            <span class="subtitle">
                {@html subtitle}
            </span>
        </div>
    </div>
    {#if !hidden}
    <div transition:slide class="content">
        <slot></slot>
    </div>
    {/if}
</section>
{#if hr}
<hr>
{/if}