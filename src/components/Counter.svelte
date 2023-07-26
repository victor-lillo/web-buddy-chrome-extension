<script lang="ts">
  export let count: number
  let message: string = null

  const increment = () => (count += 1)
  const decrement = () => (count -= 1)

  const handleSave = () => {
    chrome.storage.sync.set({ count }).then(() => {
      message = 'Updated!'

      setTimeout(() => {
        message = null
      }, 2000)
    })
  }
</script>

<section>
  <h1>
    Current count:&nbsp;<strong>{count}</strong>
  </h1>
  <div>
    <button on:click={decrement}>-</button>
    <button on:click={increment}>+</button>
    {#if message}<span>{message}</span>{/if}
    <button on:click={handleSave}>Save</button>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }

  h1 {
    display: flex;
  }
  button {
    background: none;
    border: 1px solid transparent;
    font-size: 1.7rem;
    padding: 0.6rem;
  }

  button:hover,
  button:focus {
    background-color: theme('colors.blue.800');
    color: theme('colors.blue.50');
  }
</style>
