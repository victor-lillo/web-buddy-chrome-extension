<script lang="ts">
  import HandleUrls from '../components/HandleUrls.svelte'
  import Form from '../components/Form.svelte'
  import DevComponent from '../components/dev/DevComponent.svelte'

  export let blockedUrls
</script>

<section>
  <Form />
  <HandleUrls defaultBlockedUrls={blockedUrls} />
  <DevComponent />
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
