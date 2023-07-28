<script lang="ts">
  import Time from '../components/Time.svelte'
  import Form from '../components/Form.svelte'

  export let relativeTime: string

  const handleClick = () => {
    chrome.runtime.openOptionsPage()
  }
</script>

<section>
  <Time {relativeTime} />
  <Form />
  <button on:click={handleClick}>Go to settings</button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
