<script lang="ts">
  import Button from '../Button.svelte'
  import { clearStorage } from '../../utils/storage'

  const text = 'Clear Storage'

  const handleClick = async () => {
    const storage = await clearStorage()
    console.log(storage)
  }
</script>

<Button {handleClick} {text} variant={'red'} />
