<script lang="ts">
  import Button from '../Button.svelte'
  import { clearStorage } from '../../utils/storage'

  const text = 'Clear Storage'

  const handleClick = async () => {
    if (window.confirm('Do you really want to delete?')) {
      const storage = await clearStorage()
      console.log(storage)
    }
  }
</script>

<Button {handleClick} {text} variant={'dev-red'} />
