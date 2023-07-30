<script lang="ts">
  import { getRules } from '../../utils/rules'
  import Button from '../Button.svelte'

  const text = 'Log Rules'

  const handleClick = async () => {
    const rules = await getRules()
    rules.forEach((rule) => {
      console.log(rule)
    })
  }
</script>

<Button {handleClick} {text} variant={'dev-green'} />
