<script lang="ts">
  function validate() {
    console.log("I'm the validate() function")
  }
</script>

<form on:submit|preventDefault={validate}>
  <label for="story">Add the URLs you want to block</label>
  <textarea id="story" name="story" rows="5" cols="33" />
  <button type="submit"> Save me! </button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    gap: 0.5rem;
  }

  textarea {
    resize: vertical;
    max-height: 200px;
  }

  button {
    width: fit-content;
  }
</style>
