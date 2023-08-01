<script lang="ts">
  type Variants = 'dev-red' | 'dev-green' | 'primary' | 'secondary' | 'alert'
  export let text: string
  export let handleClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = undefined
  export let variant: Variants | undefined = undefined
  export let disabled = false
  export let type: 'submit' | 'reset' = undefined
</script>

<button on:click={handleClick} class={variant} {disabled} {type}>
  {text}
  <slot />
</button>

<style>
  button {
    --background-color: #009e20;
    --border-color: transparent;
    font-size: 1rem;
    color: var(--color-light-1);
    background-color: var(--background-color);
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0.4rem 1rem;
    width: fit-content;
    display: flex;
    align-items: center;
    white-space: nowrap;
    gap: 0.3rem;
  }

  button:is(:hover):not(:disabled) {
    filter: brightness(0.9);
    box-shadow: var(--box-shadow-hover);
  }

  button:disabled {
    opacity: 0.6;
  }

  .dev-red {
    --background-color: crimson;
    --border-color: #ffcd07;
  }

  .dev-green {
    --background-color: #009e20;
    --border-color: #ffcd07;
  }

  .primary {
    --background-color: #9328cc;
  }

  .secondary {
    --background-color: transparent;
    color: var(--color-dark-1);
    --border-color: var(--color-dark-1);
  }

  .alert {
    --background-color: transparent;
    color: crimson;
    --border-color: crimson;
  }
</style>
