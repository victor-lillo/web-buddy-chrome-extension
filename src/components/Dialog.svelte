<script>
  export let dialog
</script>

<dialog bind:this={dialog}>
  <slot />
</dialog>

<style>
  dialog[open] {
    border: none;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>
