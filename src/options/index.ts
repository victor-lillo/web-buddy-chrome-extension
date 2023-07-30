import '../styles/app.css'
import Options from './Options.svelte'
import { getStorage } from '../utils/storage'

const target = document.getElementById('full-page-app')

async function render() {
  const blockedUrls = await getStorage('blockedUrls')

  new Options({ target, props: { blockedUrls } })
}

document.addEventListener('DOMContentLoaded', render)
