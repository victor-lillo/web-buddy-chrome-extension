<script lang="ts">
  export let relativeTime: string
</script>

<section>
  <p>
    You installed the extensión:&nbsp;<strong>{relativeTime}</strong>
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    gap: 1rem;
  }
</style>
