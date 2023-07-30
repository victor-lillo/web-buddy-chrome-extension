import onInstall from './onInstall'

console.log('Service worker started.')

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to ${e.request.url} on tab ${e.request.tabId}.`
  console.log(msg)
})

onInstall()

// chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
//   const keywords = ['example']
//   console.log(changeInfo.title, changeInfo.url)
//   if (keywords && changeInfo.title) {
//     const { title } = changeInfo
//     const containsKeyword = keywords.some((keyword) => title.toLowerCase().includes(keyword))
//     if (containsKeyword) {
//       console.log('Lo contiene')
//       chrome.tabs.update(tabId, { url: //todo redirectExtensionPath })
//     }
//   }
// })
