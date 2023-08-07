<script>
  export let dialog
  export let onClick
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog on:click|stopPropagation={onClick} bind:this={dialog}>
  <slot />
</dialog>

<style>
  dialog {
    padding: 0;
    border: none;
  }

  dialog[open] {
    border-radius: var(--border-radius);
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>
