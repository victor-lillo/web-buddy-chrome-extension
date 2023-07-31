import { DEFAULT_BLOCKED_URLS, STORAGE_KEYS } from './../DEFAULTS'
import { getStorage, setStorage } from '../utils/storage'
import { setBlockRules } from '../utils/rules'

async function setInitialRules() {
  const initialBlockedUrls = (await getStorage(STORAGE_KEYS.blockedUrls)) ?? DEFAULT_BLOCKED_URLS
  setBlockRules(initialBlockedUrls)
  await setStorage({ [STORAGE_KEYS.blockedUrls]: initialBlockedUrls })
}

async function saveInitialDate() {
  const date = new Date()
  // const date = new Date('2022-08-30'
  console.log('Installed Date:', date)
  const installDate = date.getTime()
  await setStorage({ [STORAGE_KEYS.installDate]: installDate })
}

const onInstallCallback = async () => {
  await saveInitialDate()
  await setInitialRules()
}

export default function onInstall() {
  chrome.runtime.onInstalled.addListener(onInstallCallback)
}
