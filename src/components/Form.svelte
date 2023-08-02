<script lang="ts">
  import { TEXTAREA_PLACEHOLDER } from '../DEFAULTS'
  import { setStorage } from '../utils/storage'
  import { processDomainsTextarea } from '../utils/processDomainsForm'
  import Button from './Button.svelte'

  export let blockedDomains: Array<string> = []
  let placeholder: string = TEXTAREA_PLACEHOLDER
  let value: string = ''

  async function handleAdd() {
    console.log('Add rules!')
    const { updatedDomains, feedback } = processDomainsTextarea({ text: value, previousDomains: blockedDomains })
    placeholder = feedback
    blockedDomains = updatedDomains
    value = ''

    await setStorage({ blockedDomains: updatedDomains })
  }
</script>

<form on:submit|preventDefault={handleAdd}>
  <label for="story">Add domains to block</label>
  <textarea id="story" name="story" {placeholder} bind:value />
  <Button text={'Save domains'} disabled={value.length === 0} variant={'primary'} type="submit" />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    gap: 0.5rem;
    align-items: center;
  }

  label {
    align-self: flex-start;
    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
  }

  textarea {
    width: 100%;
    resize: vertical;
    max-height: 200px;
    min-height: 100px;
    font-family: var(--font-family);
    border-radius: var(--border-radius);
    border: 1px solid transparent;
    outline: none;
    overflow: hidden;
  }

  textarea:focus {
    border-color: var(--color-accent-grey);
  }
</style>
