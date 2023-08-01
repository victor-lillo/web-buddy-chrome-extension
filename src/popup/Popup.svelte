<script lang="ts">
  import Time from '../components/Time.svelte'
  import Form from '../components/Form.svelte'
  import Button from '../components/Button.svelte'
  import Settings from '../components/icons/Settings.svelte'
  import { extension } from '../utils/extensionData'
  import Alert from '../components/icons/Alert.svelte'

  export let relativeTime: string
  export let isAllowedIncognitoAccess: Boolean

  const handleOptionsPage = () => {
    chrome.runtime.openOptionsPage()
  }
  const handleAllowIncognito = () => {
    chrome.tabs.create({
      url: 'chrome://extensions/?id=' + extension.id,
    })
  }
</script>

<section>
  <div class:align-right={isAllowedIncognitoAccess}>
    {#if !isAllowedIncognitoAccess}
      <Button handleClick={handleAllowIncognito} text={'Allow in incognito'} variant="alert">
        <Alert />
      </Button>
    {/if}

    <Button handleClick={handleOptionsPage} text="Settings" variant={'secondary'}>
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
    display: flex;
    gap: 1rem;
  }

  .align-right {
    align-self: flex-end;
  }
</style>
