<script lang="ts">
  import DevButton from './DevButton.svelte'
  import { clearStorage } from '../../utils/storage'

  const text = 'Clear Storage'

  const handleClick = async () => {
    const storage = await clearStorage()
    console.log(storage)
  }
</script>

<DevButton {handleClick} {text} variant={'red'} />
