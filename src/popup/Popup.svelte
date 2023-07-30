<script lang="ts">
  import Time from '../components/Time.svelte'
  import Form from '../components/Form.svelte'
  import Button from '../components/Button.svelte'

  export let relativeTime: string

  const handleClick = () => {
    chrome.runtime.openOptionsPage()
  }
</script>

<section>
  <Time {relativeTime} />
  <Form />
  <Button {handleClick} text="Go to Settings" />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
