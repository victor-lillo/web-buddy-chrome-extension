<script lang="ts">
  export let count: number
  let message: string = null
</script>

<section>
  <h1>Don't give up, you're doing great</h1>
  <p>
    Current time blocking garbage: <span>{count}</span>
  </p>
</section>

<style>
  :global(body) {
    background-color: lightgoldenrodyellow;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h1 {
    font-size: 2rem;
    color: crimson;
  }
  span {
    font-weight: 600;
  }
</style>
