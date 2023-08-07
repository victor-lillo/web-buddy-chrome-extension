import onInstall from './onInstall'
import onStorageChanged from './onStorageChanged'

onInstall()
onStorageChanged()

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to ${e.request.url} on tab ${e.request.tabId}.`
  console.log(msg)
})
