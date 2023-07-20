import { setStorage } from '../utils/storage'

async function saveInitialDate() {
  const installDate = new Date().getTime()
  await setStorage({ installDate })
}

export default function onInstall() {
  chrome.runtime.onInstalled.addListener(saveInitialDate)
}
