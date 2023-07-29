<script lang="ts">
  import Button from '../Button.svelte'
  import { getWholeStorage } from '../../utils/storage'

  const text = 'Log Storage'

  const handleClick = async () => {
    const storage = await getWholeStorage()
    console.log(storage)
  }
</script>

<Button {handleClick} {text} variant={'dev-green'} />
