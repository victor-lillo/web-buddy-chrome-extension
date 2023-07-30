import { setBlockRules } from '../utils/rules'
import { STORAGE_KEYS } from './../DEFAULTS'
import onInstall from './onInstall'

console.log('Service worker started.')

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to ${e.request.url} on tab ${e.request.tabId}.`
  console.log(msg)
})

onInstall()

// Storage onChanged example
chrome.storage.onChanged.addListener(async (changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key !== STORAGE_KEYS.blockedUrls) return
    const sortedNewRules = newValue.sort()
    await setBlockRules(sortedNewRules)
  }
})

// Chrome onStartup example
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser init')
})
