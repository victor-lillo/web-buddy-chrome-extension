<script lang="ts">
  import Time from '../components/Time.svelte'

  export let relativeTime: string
</script>

<section>
  <Time {relativeTime} />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
  }
</style>
