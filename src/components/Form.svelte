<script lang="ts">
  import { TEXTAREA_PLACEHOLDER } from '../DEFAULTS'
  import { setStorage } from '../utils/storage'
  import { processDomainsTextarea } from '../utils/processDomainsForm'
  import Button from './Button.svelte'

  export let blockedUrls: Array<string> = []
  let placeholder: string = TEXTAREA_PLACEHOLDER
  let value: string = ''

  async function handleAdd() {
    console.log('Add rules!')
    const { updatedDomains, feedback } = processDomainsTextarea({ text: value, previousDomains: blockedUrls })
    placeholder = feedback
    blockedUrls = updatedDomains
    value = ''

    await setStorage({ blockedUrls: updatedDomains })
  }
</script>

<form on:submit|preventDefault={handleAdd}>
  <label for="story">Add URLs to block</label>
  <textarea id="story" name="story" {placeholder} bind:value />
  <Button text={'Save URLs'} disabled={value.length === 0} variant={'primary'} type="submit" />
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
