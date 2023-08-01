<script lang="ts">
  import { setStorage } from '../utils/storage'
  import Button from './Button.svelte'
  export let blockedUrls: Array<string> = []

  let value: string = ''
  function splitWordsByDelimiter(str: string) {
    const palabrasArray = str.split(/[,\s\n]/).map((palabra) => palabra.trim())
    return palabrasArray.filter((el) => el)
  }

  async function handleAdd() {
    console.log('Add rules!')
    const userUrls = splitWordsByDelimiter(value)
    const newUrls = [...new Set([...blockedUrls, ...userUrls])].sort()
    blockedUrls = newUrls
    value = ''
    await setStorage({ blockedUrls: newUrls })
  }
</script>

<form on:submit|preventDefault={handleAdd}>
  <label for="story">Add URLs to block</label>
  <textarea id="story" name="story" bind:value />
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
