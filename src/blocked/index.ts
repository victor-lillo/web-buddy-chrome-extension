import '../styles/app.css'
import Blocked from '../components/Blocked.svelte'

const target = document.getElementById('app')

const time = 12
async function render() {
  // const { time } = await chrome.storage.sync.get({ time: 0 })

  new Blocked({ target, props: { time } })
}

document.addEventListener('DOMContentLoaded', render)
