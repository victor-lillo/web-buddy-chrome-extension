import '../styles/app.css'
import Time from '../components/Time.svelte'
import { getStorage } from '../utils/storage'
import { getRelativeTime } from '../utils/relativeDate'

const target = document.getElementById('app')

async function render() {
  const installDate = await getStorage('installDate')
  const relativeTime = getRelativeTime(installDate)

  new Time({ target, props: { relativeTime } })
}

document.addEventListener('DOMContentLoaded', render)
