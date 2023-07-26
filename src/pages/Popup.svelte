<script lang="ts">
  import Time from '../components/Time.svelte'

  export let relativeTime: string
</script>

<section>
  <Time {relativeTime} />
</section>

<style>
  section {
    border: 1px solid black;
  }
</style>
