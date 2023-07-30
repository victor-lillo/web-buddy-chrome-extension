<script lang="ts">
  import Button from './Button.svelte'
  import AddDefaults from './icons/AddDefaults.svelte'
  import Delete from './icons/Delete.svelte'
  import { setStorage } from '../utils/storage'
  import { DEFAULT_BLOCKED_URLS } from '../DEFAULTS'

  export let blockedUrls: Array<string>
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

  const handleRemove = async () => {
    console.log('Remove rules:', selectedUrls)
    const newUrls = blockedUrls.filter((el) => !selectedUrls.includes(el)).sort()
    blockedUrls = newUrls
    selectedUrls = []
    isSelectAll = false
    await setStorage({ blockedUrls: newUrls })
  }

  const handleAddDefaults = async () => {
    console.log('Add defaults')
    const newUrls = [...new Set([...blockedUrls, ...DEFAULT_BLOCKED_URLS])].sort()
    blockedUrls = newUrls
    await setStorage({ blockedUrls: newUrls })
  }
</script>

<section>
  <h1>Delete blocked URLs</h1>
  {#if blockedUrls.length === 0}
    <span>No URls saved.</span>
  {/if}
  {#if blockedUrls.length > 0}
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
    </fieldset>
    <Button
      text={'Delete selected'}
      handleClick={handleRemove}
      disabled={selectedUrls.length === 0}
      variant={'primary'}
    >
      <Delete />
    </Button>
  {/if}
  <Button text={'Add defaults'} handleClick={handleAddDefaults}>
    <AddDefaults />
  </Button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
    padding: 1rem 0rem;
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
    padding: 0rem 1rem;
    gap: 0.5rem;
  }

  .fieldset-row--header {
    background-color: #e8ffe5;
    color: var(--color-dark-2);
  }
</style>
