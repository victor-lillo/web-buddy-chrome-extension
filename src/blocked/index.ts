import '../styles/app.css'
import Blocked from './Blocked.svelte'
import { STORAGE_KEYS, URL_PARAM_ORIGIN } from './../DEFAULTS'
import { getStorage } from '../utils/storage'
import { getRelativeTime } from '../utils/relativeDate'

const target = document.getElementById('full-page-app')

async function render() {
  const installDate = await getStorage(STORAGE_KEYS.installDate)
  const relativeTime = getRelativeTime(installDate)

  const params = new URLSearchParams(document.location.search)
  const originUrl = params.get(URL_PARAM_ORIGIN)

  new Blocked({ target, props: { relativeTime, originUrl } })
}

document.addEventListener('DOMContentLoaded', render)
