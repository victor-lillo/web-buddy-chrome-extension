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
      <div class="fieldset-content">
        {#each blockedUrls as url}
          <div class="fieldset-row">
            <label for={url}>
              {url}
            </label>
            <input type="checkbox" bind:group={selectedUrls} name="urls" value={url} on:change={handleSelectChange} />
          </div>
        {/each}
      </div>
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
  }

  h1 {
    display: flex;
    font-weight: var(--font-weight-bold);
  }

  fieldset {
    --width-scrollbar: 0.5rem;
    --padding-scrollbar-right: 0.3rem;
    --padding-scrollbar-left: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--color-light-0);
    border-radius: var(--border-radius);
    border: none;
    overflow: hidden;
    padding: 0;
  }

  .fieldset-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: var(--padding-scrollbar-left);
    padding-left: calc(var(--padding-scrollbar-left) + var(--width-scrollbar) + var(--padding-scrollbar-right));
  }

  .fieldset-row--header {
    background-color: var(--color-light-2);
    color: var(--color-dark-2);
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding-right: calc(var(--width-scrollbar) + var(--padding-scrollbar-right));
  }

  .fieldset-content {
    max-height: 300px;
    overflow-y: auto;
    scrollbar-gutter: stable;
    margin-right: var(--padding-scrollbar-right);
  }

  fieldset ::-webkit-scrollbar {
    width: var(--width-scrollbar);
  }

  fieldset ::-webkit-scrollbar-thumb {
    background-color: var(--color-light-4);
    border-radius: 10px;
  }
</style>
