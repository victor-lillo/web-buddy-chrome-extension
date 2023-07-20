<script lang="ts">
  export let installDate: number
  let message = null

  const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' })
</script>

<section>
  <h1>
    Current time blocking sites:&nbsp;<strong>{installDate}</strong>
  </h1>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }

  h1 {
    display: flex;
  }
</style>
