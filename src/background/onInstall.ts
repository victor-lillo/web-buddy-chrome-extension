import { setStorage } from '../utils/storage'

async function saveInitialDate() {
  const date = new Date()
  // const date = new Date('2022-08-30'
  console.log('Installed Date:', date)
  const installDate = date.getTime()
  await setStorage({ installDate })
}

export default function onInstall() {
  chrome.runtime.onInstalled.addListener(saveInitialDate)
}
