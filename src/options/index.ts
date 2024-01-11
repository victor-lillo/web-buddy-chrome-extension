import { STORAGE_KEYS } from './../DEFAULTS'
import '../styles/app.css'
import Options from './Options.svelte'
import { getStorage } from '../utils/storage'

const target = document.getElementById('full-page-app')!

async function render() {
  const blockedDomains = await getStorage(STORAGE_KEYS.blockedDomains)

  new Options({ target, props: { blockedDomains } })
}

document.addEventListener('DOMContentLoaded', render)
