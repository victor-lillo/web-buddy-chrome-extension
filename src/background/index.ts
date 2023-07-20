import onInstall from './onInstall'

const REDIRECT = chrome.declarativeNetRequest.RuleActionType.REDIRECT
const MAIN_FRAME = chrome.declarativeNetRequest.ResourceType.MAIN_FRAME
const SUB_FRAME = chrome.declarativeNetRequest.ResourceType.SUB_FRAME
const XMLHTTPREQUEST = chrome.declarativeNetRequest.ResourceType.XMLHTTPREQUEST

const redirectExtensionPath = '/src/blocked/blocked.html'

console.log('Service worker started.')

const blockUrls = ['||example', '||example1', '||examples']

chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((e) => {
  const msg = `Navigation blocked to ${e.request.url} on tab ${e.request.tabId}.`
  console.log(msg)
})

blockUrls.forEach((domain, index) => {
  let id = index + 1

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: id,
        priority: 1,
        action: {
          type: REDIRECT,
          redirect: {
            extensionPath: redirectExtensionPath,
          },
        },
        condition: {
          urlFilter: domain,
          resourceTypes: [MAIN_FRAME, SUB_FRAME, XMLHTTPREQUEST],
        },
      },
    ],
    removeRuleIds: [id],
  })
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
