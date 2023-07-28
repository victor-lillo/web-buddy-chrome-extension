<script lang="ts">
  import Time from '../components/Time.svelte'
  import Form from '../components/Form.svelte'

  export let relativeTime: string
</script>

<section>
  <Time {relativeTime} />
  <Form />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
