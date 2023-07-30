<script lang="ts">
  import Button from '../Button.svelte'

  const text = 'Log Rules'

  const handleClick = async () => {
    const rules = await chrome.declarativeNetRequest.getDynamicRules()
    rules.forEach((rule) => {
      console.log(rule)
    })
  }
</script>

<Button {handleClick} {text} variant={'dev-green'} />
