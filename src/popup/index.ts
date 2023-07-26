import '../styles/app.css'
import Popup from '../pages/Popup.svelte'
import { getStorage } from '../utils/storage'
import { getRelativeTime } from '../utils/relativeDate'

const target = document.getElementById('app')

async function render() {
  const installDate = await getStorage('installDate')
  const relativeTime = getRelativeTime(installDate)

  new Popup({ target, props: { relativeTime } })
}

document.addEventListener('DOMContentLoaded', render)
