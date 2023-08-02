<script lang="ts">
  import Button from '../Button.svelte'
  import { getRules } from '../../utils/rules'

  const text = 'Log Rules'

  const handleClick = async () => {
    const rules = await getRules()
    if (rules.length > 0) {
      rules.forEach((rule) => {
        console.log(rule)
      })
    } else {
      console.log({ rules })
    }
  }
</script>

<Button {handleClick} {text} variant={'dev-green'} />
