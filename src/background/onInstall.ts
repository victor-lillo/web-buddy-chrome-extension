import { DEFAULT_BLOCKED_URLS, STORAGE_KEYS } from './../DEFAULTS'
import { getStorage, setStorage } from '../utils/storage'
import { setBlockRules } from '../utils/rules'

async function setInitialRules() {
  const initialBlockedUrls = (await getStorage(STORAGE_KEYS.blockedDomains)) ?? DEFAULT_BLOCKED_URLS
  setBlockRules(initialBlockedUrls)
  await setStorage({ [STORAGE_KEYS.blockedDomains]: initialBlockedUrls })
}

async function saveInitialDate() {
  const date = new Date()
  const installDate = date.getTime()
  console.log('installDate - saveInitialDate', installDate)
  await setStorage({ [STORAGE_KEYS.installDate]: installDate })
}

async function onInstallCallback(details: chrome.runtime.InstalledDetails) {
  if (details.reason === 'install') {
    await saveInitialDate()
    await setInitialRules()
  }
}

export default function onInstall() {
  chrome.runtime.onInstalled.addListener(async (details) => {
    await onInstallCallback(details)
  })
}
