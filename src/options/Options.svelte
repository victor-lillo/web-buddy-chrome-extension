<script lang="ts">
  import ButtonInstructions from '../components/ButtonInstructions.svelte'
  import Form from '../components/Form.svelte'
  import HandleUrls from '../components/HandleUrls.svelte'

  export let blockedDomains: string[]
</script>

<section>
  <Form bind:blockedDomains>
    <ButtonInstructions slot="instructions" />
  </Form>
  <HandleUrls bind:blockedDomains />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 80%;
    min-width: var(--width-full-page);
  }
</style>
