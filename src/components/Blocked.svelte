<script lang="ts">
  export let time: number
</script>

<section>
  <h1>Don't give up, you're doing great!</h1>
  <p>
    Current time blocking garbage: <span>{time}</span>
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid black;
    min-height: 80%;
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
