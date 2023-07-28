<script lang="ts">
  export let blockedUrls: [string]

  const handleSave = () => {
    console.log('Saved')
    // chrome.storage.sync.set({ blockedUrls }).then(() => {
    //   message = 'Updated!'
    //   setTimeout(() => {
    //     message = null
    //   }, 2000)
    // })
  }
</script>

<section>
  <h1>Blocked urls</h1>
  <fieldset>
    <div class="fieldset-row">
      <label for="select-all"> Select all </label>
      <input id="select-all" type="checkbox" />
    </div>
    {#each blockedUrls as url}
      <div class="fieldset-row">
        <label for={url}>
          {url}
        </label>
        <input id={url} type="checkbox" />
      </div>
    {/each}
  </fieldset>
  <button on:click={handleSave}>Delete</button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem;
    background-color: var(--color-light-0);
    border: 1px solid var(--color-light-4);
    border-radius: 5px;
  }

  h1 {
    display: flex;
  }

  fieldset {
    border: none;
  }

  .fieldset-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  button {
    font-size: inherit;
    background: none;
    border: 1px solid transparent;
    padding: 0.6rem;
  }

  button:hover,
  button:focus {
    background-color: lightblue;
  }
</style>
