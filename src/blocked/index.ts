import '../app.css'
import Blocked from '../components/Blocked.svelte'

const target = document.getElementById('app')

async function render() {
  const { count } = await chrome.storage.sync.get({ count: 0 })

  new Blocked({ target, props: { count } })
}

document.addEventListener('DOMContentLoaded', render)
