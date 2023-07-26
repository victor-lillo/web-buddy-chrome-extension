<script lang="ts">
  import { getRelativeTime } from '../utils/relativeDate'

  export let installDate: number

  const relativeTime = getRelativeTime(installDate)
  console.log({ relativeTime })
</script>

<section>
  <h1>
    Current time blocking sites:&nbsp;<strong>{installDate}</strong>
  </h1>
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

  h1 {
    display: flex;
  }
</style>
