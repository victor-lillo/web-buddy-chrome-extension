import '../styles/app.css'
import Options from './Options.svelte'

const target = document.getElementById('full-page-app')

async function render() {
  const blockedUrls = ['url1', 'url2', 'url2']
  new Options({ target, props: { blockedUrls } })
}

document.addEventListener('DOMContentLoaded', render)
