<script>
    import {
        slide
    } from 'svelte/transition';

    export let title;
    export let hidden = true;

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
        font-size: 14px;
        /* font-family: monospace; */
    }

    .collapsor {
        font-size: 15px;
        font-family: monospace;
    }

    section {
        border-radius: 3px;
        margin-bottom: 10px;
        background-color: #f6f6f6;
        padding: 10px;
        margin-top: 1em;
    }

    .content {
        color: #555555;
        padding: 10px 0 6px 0;
        font-size: 80%;
    }

    .subtitle {
        color: gray;
        font-size: 12px;
    }

    .minor-title {
        color: #555555 !important;
        font-size: 14px;
    }

    .mobile-subtitle {
        padding-bottom: 4px;
    }
</style>

<section>
    <div class="accordion-top keyboard-nav" on:click={toggleHidden} on:click={unfocus} on:keydown={toggleHiddenKeypress} tabindex="0">
        <div class="level is-marginless is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <p class="minor-title" aria-label="Expand {title}">
                        {#if hidden}
                        Show
                        {:else}
                        Hide
                        {/if}
                        {@html title}
                    </p>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    {#if hidden}
                    <p class="collapsor minor-title">+</p>
                    {:else}
                    <p class="collapsor minor-title" hidden={hidden}>-</p>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    {#if !hidden}
    <div transition:slide class="content">
        <slot></slot>
    </div>
    {/if}
</section>