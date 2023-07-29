<script lang="ts">
  export let blockedUrls: [string]
  let isSelectAll = false
  let selectedUrls = []

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked
    if (isChecked) {
      selectedUrls = blockedUrls
    } else {
      selectedUrls = []
    }
  }

  const handleSelectChange = () => {
    if (blockedUrls.length === selectedUrls.length) {
      isSelectAll = true
    } else if (isSelectAll) {
      isSelectAll = false
    }
  }

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
    <div class="fieldset-row fieldset-row--header">
      <label for="select-all"> Select all </label>
      <input id="select-all" type="checkbox" bind:checked={isSelectAll} on:change={handleSelectAllChange} />
    </div>
    {#each blockedUrls as url}
      <div class="fieldset-row">
        <label for={url}>
          {url}
        </label>
        <input type="checkbox" bind:group={selectedUrls} name="urls" value={url} on:change={handleSelectChange} />
      </div>
    {/each}
    {#if selectedUrls.length > 0}
      Selected urls:
      {selectedUrls.toString()}
    {/if}
  </fieldset>
  <button on:click={handleSave} disabled={selectedUrls.length === 0}>Delete</button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    padding: 0;
  }

  .fieldset-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .fieldset-row--header {
    background-color: rgb(255, 253, 232);
    color: var(--color-dark-2);
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
