<script lang="ts">
  import { getWholeStorage } from '../../utils/storage'

  const handleClick = async () => {
    const storage = await getWholeStorage()
    console.log(storage)
  }
</script>

{#if import.meta.env.DEV}
  <button on:click={handleClick}>Log Storage</button>
{/if}

<style>
  button {
    font-size: 1.1rem;
    color: var(--color-light-1);
    background-color: #9328cc;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    padding: 0.6rem 1.2rem;
    width: fit-content;
  }

  button:is(:hover, :focus):not(:disabled) {
    background-color: #9e3ed1;
    box-shadow: var(--box-shadow-hover);
  }

  button:disabled {
    opacity: 0.6;
  }
</style>
