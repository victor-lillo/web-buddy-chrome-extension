<script lang="ts">
  import Button from './Button.svelte'
  import { setStorage } from '../utils/storage'
  import Delete from './icons/Delete.svelte'

  export let defaultBlockedUrls: [string]
  let isSelectAll = false
  let userBlockedUrls = []

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked
    if (isChecked) {
      userBlockedUrls = defaultBlockedUrls
    } else {
      userBlockedUrls = []
    }
  }

  const handleSelectChange = () => {
    if (defaultBlockedUrls.length === userBlockedUrls.length) {
      isSelectAll = true
    } else if (isSelectAll) {
      isSelectAll = false
    }
  }

  const handleSave = async () => {
    console.log('Saved')
    await setStorage({ userBlockedUrls })
    // chrome.storage.sync.set({ blockedUrls }).then(() => {
    //   message = 'Updated!'
    //   setTimeout(() => {
    //     message = null
    //   }, 2000)
    // })
  }
</script>

<section>
  <h1>Delete blocked URLs</h1>
  <fieldset>
    <div class="fieldset-row fieldset-row--header">
      <label for="select-all"> Select all </label>
      <input id="select-all" type="checkbox" bind:checked={isSelectAll} on:change={handleSelectAllChange} />
    </div>
    {#each defaultBlockedUrls as url}
      <div class="fieldset-row">
        <label for={url}>
          {url}
        </label>
        <input type="checkbox" bind:group={userBlockedUrls} name="urls" value={url} on:change={handleSelectChange} />
      </div>
    {/each}
    {#if userBlockedUrls.length > 0}
      Selected urls:
      {userBlockedUrls.toString()}
    {/if}
  </fieldset>
  <Button text={'Delete selected'} handleClick={handleSave} disabled={userBlockedUrls.length === 0} variant={'primary'}>
    <Delete />
  </Button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
    padding: 1rem;
    background-color: var(--color-light-0);
    border: 1px solid var(--color-light-4);
    border-radius: var(--border-radius);
  }

  h1 {
    display: flex;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    width: 100%;
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
</style>
