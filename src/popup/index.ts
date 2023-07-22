import '../styles/app.css'
import Time from '../components/Time.svelte'
import { getStorage } from '../utils/storage'

const target = document.getElementById('app')

async function render() {
  const installDate = await getStorage('installDate')

  new Time({ target, props: { installDate } })
}

document.addEventListener('DOMContentLoaded', render)
