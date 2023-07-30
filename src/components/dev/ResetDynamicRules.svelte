<script lang="ts">
  import Button from '../Button.svelte'
  import { resetBlockRules } from '../../utils/rules'

  const text = 'Reset Rules'

  const handleClick = async () => {
    await resetBlockRules()
  }
</script>

<Button {handleClick} {text} variant={'dev-red'} />
