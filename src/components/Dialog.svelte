<script>
  export let dialog
</script>

<dialog bind:this={dialog} on:close>
  <slot />
</dialog>

<style>
  dialog {
    border: none;
    border-radius: var(--border-radius);
  }
  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>
