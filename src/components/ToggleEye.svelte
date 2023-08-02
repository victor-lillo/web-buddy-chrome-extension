<script lang="ts">
  import EyeClosed from './icons/EyeClosed.svelte'
  import EyeOpened from './icons/EyeOpened.svelte'

  export let isShow = false
</script>

<label for="Show all">
  {isShow ? 'Hide all' : 'Show all'}
  {#if isShow}
    <EyeClosed />
  {:else}
    <EyeOpened />
  {/if}
  <input id="Show all" type="checkbox" bind:checked={isShow} />
</label>

<style>
  label {
    color: var(--color-dark-1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    min-width: 14ch;
    border: 2px solid var(--color-dark-1);
    border-radius: var(--border-radius);
  }

  input {
    display: none;
  }

  label:hover {
    box-shadow: var(--box-shadow-hover);
  }
</style>
