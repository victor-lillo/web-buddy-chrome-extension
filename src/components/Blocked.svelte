<script lang="ts">
  export let relativeTime: string
</script>

<section>
  <h1>Don't give up, you're doing great!</h1>
  <p>
    You have been blocking garbage since <span>{relativeTime}</span>
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-height: 80%;
    min-width: 80ch;
  }
  h1 {
    color: var(--color-dark-2);
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
  span {
    font-weight: 600;
  }
</style>
