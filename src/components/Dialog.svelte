<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  export let dialog
  export let onClick: MouseEventHandler<HTMLDialogElement>
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
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
