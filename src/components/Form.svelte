<script lang="ts">
  import Button from './Button.svelte'

  let value: string = ''
  function handleSave() {
    console.log("I'm the handleSave()) function")
    //TODO añadir reglas
  }
</script>

<form on:submit|preventDefault={handleSave}>
  <label for="story">Add the URLs you want to block</label>
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
  }

  textarea {
    width: 100%;
    resize: vertical;
    max-height: 200px;
    min-height: 100px;
    font-family: var(--font-family);
  }
</style>
