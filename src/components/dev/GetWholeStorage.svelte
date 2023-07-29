<script lang="ts">
  import DevButton from './DevButton.svelte'
  import { getWholeStorage } from '../../utils/storage'

  const text = 'Log Storage'

  const handleClick = async () => {
    const storage = await getWholeStorage()
    console.log(storage)
  }
</script>

<DevButton {handleClick} {text} />
