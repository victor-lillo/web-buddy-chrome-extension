<script lang="ts">
  import Time from '../components/Time.svelte'
  import Form from '../components/Form.svelte'
  import Button from '../components/Button.svelte'
  import Settings from '../components/icons/Settings.svelte'

  export let relativeTime: string

  const handleClick = () => {
    chrome.runtime.openOptionsPage()
  }
</script>

<section>
  <div>
    <Button {handleClick} text="Settings" variant={'secondary'}>
      <Settings />
    </Button>
  </div>
  <Time {relativeTime} />
  <Form />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div {
    align-self: flex-end;
  }
</style>
