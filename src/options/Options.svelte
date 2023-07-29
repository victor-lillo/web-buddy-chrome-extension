<script lang="ts">
  import HandleUrls from '../components/HandleUrls.svelte'
  import Form from '../components/Form.svelte'
  import DevHandleStorage from '../components/dev/DevHandleStorage.svelte'

  export let blockedUrls

  const handleClick = () => {
    chrome.runtime.openOptionsPage()
  }
</script>

<section>
  <Form />
  <HandleUrls defaultBlockedUrls={blockedUrls} />
  <DevHandleStorage />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 80%;
    min-width: 80ch;
  }
</style>
