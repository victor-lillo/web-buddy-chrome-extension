const REDIRECT = chrome.declarativeNetRequest.RuleActionType.REDIRECT
const MAIN_FRAME = chrome.declarativeNetRequest.ResourceType.MAIN_FRAME
const SUB_FRAME = chrome.declarativeNetRequest.ResourceType.SUB_FRAME
const XMLHTTPREQUEST = chrome.declarativeNetRequest.ResourceType.XMLHTTPREQUEST

const REDIRECT_BLOCKED_PAGE = '/src/blocked/blocked.html'

export async function setRules(urls: Array<string>) {
  urls.forEach((domain: string, index: number) => {
    let id = index + 1

    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: id,
          priority: 1,
          action: {
            type: REDIRECT,
            redirect: {
              extensionPath: REDIRECT_BLOCKED_PAGE,
            },
          },
          condition: {
            urlFilter: `||${domain}`,
            resourceTypes: [MAIN_FRAME, SUB_FRAME, XMLHTTPREQUEST],
          },
        },
      ],
      removeRuleIds: [id],
    })
  })
}

export async function getRules() {
  return chrome.declarativeNetRequest.getDynamicRules()
}
