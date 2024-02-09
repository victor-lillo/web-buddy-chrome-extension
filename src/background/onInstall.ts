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

export async function onInstallCallback(details: chrome.runtime.InstalledDetails) {
  console.log('onInstallCallback')
  if (details.reason === 'install') {
    console.log('Reason: install')
    await saveInitialDate()
    await setInitialRules()
  }
}
