<script lang="ts">
  export let time: number
  let message: string = null
</script>

<section>
  <h1>Don't give up, you're doing great</h1>
  <p>
    Current time blocking garbage: <span>{time}</span>
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h1 {
    font-size: 2rem;
    color: blue;
  }
  span {
    font-weight: 600;
  }
</style>
