<script lang="ts">
  type Variants = 'red'
  export let text: string
  export let handleClick: svelte.JSX.MouseEventHandler<HTMLButtonElement>
  export let variant: Variants | undefined = undefined
</script>

{#if import.meta.env.DEV}
  <button on:click={handleClick} class={variant}>{text}</button>
{/if}

<style>
  button {
    --background-color: #009e20;
    --border-color: crimson;
    font-size: 1rem;
    color: var(--color-light-1);
    background-color: var(--background-color);
    border: 4px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0.4rem 1rem;
    width: fit-content;
  }

  button:is(:hover):not(:disabled) {
    filter: brightness(0.9);
    box-shadow: var(--box-shadow-hover);
  }

  button:disabled {
    opacity: 0.6;
  }

  .red {
    --background-color: crimson;
    --border-color: #009e20;
  }
</style>
