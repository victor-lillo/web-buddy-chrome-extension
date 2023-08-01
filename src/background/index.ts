import onInstall from './onInstall'
import onStorageChanged from './onStorageChanged'

console.log('Service worker started.')

onInstall()
onStorageChanged()

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to ${e.request.url} on tab ${e.request.tabId}.`
  console.log(msg)
})

// Chrome onStartup example
chrome.runtime.onStartup.addListener(() => {
  console.log('Browser init')
})
