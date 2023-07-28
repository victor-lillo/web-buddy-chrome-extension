<script lang="ts">
  import HandleUrls from '../components/HandleUrls.svelte'
  import Form from '../components/Form.svelte'

  export let blockedUrls

  const handleClick = () => {
    chrome.runtime.openOptionsPage()
  }
</script>

<section>
  <Form />
  <HandleUrls {blockedUrls} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 80%;
  }
</style>
