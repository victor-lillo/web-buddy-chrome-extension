import { getWholeStorage, setStorage } from '../utils/storage'
import { DEFAULT_BLOCKED_URLS } from '../DEFAULTS'
import { setBlockRules } from '../utils/rules'

const onInstallCallback = async () => {
  await saveInitialDate()
  const storage = await getWholeStorage()
  setBlockRules(DEFAULT_BLOCKED_URLS)
  console.log(storage)
}

async function saveInitialDate() {
  const date = new Date()
  // const date = new Date('2022-08-30'
  console.log('Installed Date:', date)
  const installDate = date.getTime()
  await setStorage({ installDate })
}

export default function onInstall() {
  chrome.runtime.onInstalled.addListener(onInstallCallback)
}
