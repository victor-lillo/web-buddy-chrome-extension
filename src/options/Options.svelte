<script lang="ts">
  import HandleUrls from '../components/HandleUrls.svelte'
  import Form from '../components/Form.svelte'

  export let blockedDomains: Array<string>
</script>

<section>
  <Form bind:blockedDomains />
  <HandleUrls bind:blockedDomains />
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
