import '../styles/app.css'
import Blocked from './Blocked.svelte'
import { STORAGE_KEYS } from './../DEFAULTS'
import { getStorage } from '../utils/storage'
import { getRelativeTime } from '../utils/relativeDate'

const target = document.getElementById('full-page-app')

const time = 12
async function render() {
  const installDate = await getStorage(STORAGE_KEYS.installDate)
  const relativeTime = getRelativeTime(installDate)
  new Blocked({ target, props: { relativeTime } })
}

document.addEventListener('DOMContentLoaded', render)
