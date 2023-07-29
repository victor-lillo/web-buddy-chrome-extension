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

<style></style>
