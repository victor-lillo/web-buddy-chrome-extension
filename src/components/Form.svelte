<script lang="ts">
  import Button from './Button.svelte'
  import { processDomainsTextarea } from '../utils/processDomainsForm'
  import { setStorage } from '../utils/storage'
  import { TEXTAREA_PLACEHOLDER } from '../DEFAULTS'

  export let blockedDomains: string[] = []
  let placeholder: string = TEXTAREA_PLACEHOLDER
  let value: string = ''

  async function handleAdd() {
    const { updatedDomains, feedback } = processDomainsTextarea({ text: value, previousDomains: blockedDomains })
    placeholder = feedback
    blockedDomains = updatedDomains
    value = ''

    await setStorage({ blockedDomains: updatedDomains })
  }
</script>

<form on:submit|preventDefault={handleAdd}>
  <label for="rawDomains">Add domains to block</label>
  <textarea id="rawDomains" name="rawDomains" {placeholder} bind:value />
  <div class="button-container">
    <slot name="instructions" />
    <Button text={'Save domains'} variant={'primary'} type="submit" />
  </div>
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

  .button-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
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
    padding: 0.5rem;
  }

  textarea:focus {
    border-color: var(--color-accent-grey);
  }
</style>
