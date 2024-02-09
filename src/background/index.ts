import { onInstallCallback } from './onInstall'
import onStorageChanged from './onStorageChanged'

console.log('background index.ts')

chrome.runtime.onInstalled.addListener((details) => {
  console.log('runtime.onInstalled')
  onInstallCallback(details)
})

onStorageChanged()

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to ${e.request.url} on tab ${e.request.tabId}.`
  console.log(msg)
})
