<script lang="ts">
  import { extension } from '../utils/extensionData'
  import Alert from '../components/icons/Alert.svelte'
  import Button from '../components/Button.svelte'
  import Form from '../components/Form.svelte'
  import Logo from '../components/icons/Logo.svelte'
  import Settings from '../components/icons/Settings.svelte'
  import Time from '../components/Time.svelte'

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
  <div class="logo-container">
    <Logo size={1} />
  </div>
  <div class="button-container">
    {#if !isAllowedIncognitoAccess}
      <Button handleClick={handleAllowIncognito} text={'Allow in incognito'} variant="alert">
        <Alert />
      </Button>
    {/if}
    <Button
      handleClick={handleOptionsPage}
      text="Settings"
      variant={'secondary'}
      width={isAllowedIncognitoAccess ? 'full' : undefined}
    >
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
    min-width: 60ch;
  }

  .logo-container {
    align-self: center;
  }

  .button-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
</style>
