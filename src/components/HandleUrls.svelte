<script lang="ts">
  import Button from './Button.svelte'
  import AddDefaults from './icons/AddDefaults.svelte'
  import Delete from './icons/Delete.svelte'
  import ToggleEye from './ToggleEye.svelte'
  import { setStorage } from '../utils/storage'
  import { hideCharacters } from '../utils/hideLetters'
  import { DEFAULT_BLOCKED_URLS, STORAGE_KEYS } from '../DEFAULTS'

  export let blockedDomains: Array<string>
  let isSelectAll = false
  let isShow = false
  let selectedDomains = []

  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked
    if (isChecked) {
      selectedDomains = blockedDomains
    } else {
      selectedDomains = []
    }
  }

  const handleSelectChange = () => {
    if (blockedDomains.length === selectedDomains.length) {
      isSelectAll = true
    } else if (isSelectAll) {
      isSelectAll = false
    }
  }

  const handleRemove = async () => {
    console.log('Remove rules:', selectedDomains)
    const updatedDomains = blockedDomains.filter((el) => !selectedDomains.includes(el)).sort()
    blockedDomains = updatedDomains
    selectedDomains = []
    isSelectAll = false
    await setStorage({ [STORAGE_KEYS.blockedDomains]: updatedDomains })
  }

  const handleAddDefaults = async () => {
    console.log('Add defaults')
    const updatedDomains = [...new Set([...blockedDomains, ...DEFAULT_BLOCKED_URLS])].sort()
    blockedDomains = updatedDomains
    await setStorage({ [STORAGE_KEYS.blockedDomains]: updatedDomains })
  }
</script>

<section>
  <h1>Delete blocked domains</h1>
  {#if blockedDomains.length === 0}
    <span>No URls saved.</span>
  {/if}
  {#if blockedDomains.length > 0}
    <fieldset>
      <div class="fieldset-row fieldset-row--header">
        <label for="select-all"> Select all </label>
        <input id="select-all" type="checkbox" bind:checked={isSelectAll} on:change={handleSelectAllChange} />
      </div>
      <div class="fieldset-content">
        {#each blockedDomains as domain}
          <div class="fieldset-row">
            <label for={domain}>
              {isShow ? domain : hideCharacters(domain)}
            </label>
            <input
              bind:group={selectedDomains}
              id={domain}
              name="domain"
              on:change={handleSelectChange}
              type="checkbox"
              value={domain}
            />
          </div>
        {/each}
      </div>
    </fieldset>
  {/if}
  <div class="button-container">
    {#if blockedDomains.length > 0}
      <ToggleEye bind:isShow />
      <Button
        text={'Delete selected'}
        handleClick={handleRemove}
        disabled={selectedDomains.length === 0}
        variant={'primary'}
      >
        <Delete />
      </Button>
    {/if}
    <Button text={'Add defaults'} handleClick={handleAddDefaults}>
      <AddDefaults />
    </Button>
  </div>
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
    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
    align-self: flex-start;
  }

  fieldset {
    --width-scrollbar: 0.5rem;
    --padding-scrollbar-right: 0.25rem;
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
  }

  .fieldset-row--header {
    background-color: #f4eafa;
    color: var(--color-dark-2);
    overflow-y: auto;
    scrollbar-gutter: stable;
    padding-right: calc(var(--width-scrollbar) + var(--padding-scrollbar-right));
  }
  .fieldset-row--header label {
    padding: 0.5rem 0;
    flex: 1;
    display: flex;
    justify-content: space-evenly;
  }

  .fieldset-content {
    max-height: 300px;
    overflow-y: auto;
    scrollbar-gutter: stable;
    margin-right: var(--padding-scrollbar-right);
  }

  .fieldset-content label {
    flex: 1;
    padding-left: calc(var(--padding-scrollbar-left) + var(--width-scrollbar) + var(--padding-scrollbar-right));
  }

  .fieldset-row--header:has(label:hover) {
    background-color: #f1e2f8;
  }

  .fieldset-row:has(label:hover):not(.fieldset-row--header) {
    background-color: #f8f1fc;
  }

  fieldset ::-webkit-scrollbar {
    width: var(--width-scrollbar);
  }

  fieldset ::-webkit-scrollbar-thumb {
    background-color: var(--color-light-4);
    border-radius: 10px;
  }

  .button-container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
</style>
