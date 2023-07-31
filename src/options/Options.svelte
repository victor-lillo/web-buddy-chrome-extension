<script lang="ts">
  import HandleUrls from '../components/HandleUrls.svelte'
  import Form from '../components/Form.svelte'

  export let blockedUrls: Array<string>
</script>

<section>
  <Form bind:blockedUrls />
  <HandleUrls bind:blockedUrls />
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
