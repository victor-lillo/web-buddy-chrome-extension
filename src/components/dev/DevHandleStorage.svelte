<script lang="ts">
  import GetWholeStorage from './GetWholeStorage.svelte'
  import ClearStorage from './ClearStorage.svelte'
</script>

{#if import.meta.env.DEV}
  <div>
    <GetWholeStorage />
    <ClearStorage />
  </div>
{/if}

<style>
  div {
    display: flex;
    gap: 0.2rem;
  }
</style>
