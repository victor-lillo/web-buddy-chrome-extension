function splitWordsByDelimiter(str: string) {
  const wordsArray = str.split(/[,\s\n]/).map((palabra) => palabra.trim())
  return wordsArray.filter((el) => el)
}

function createFeedbackMessage(addedDomains: Array<string>) {
  const domainsLength = addedDomains.length
  return domainsLength > 0
    ? `✅ Successfuly added ${domainsLength} domain(s)`
    : `😔 No domains were added.
  `
}
export function processDomainsTextarea({ text, previousDomains }: { text: string; previousDomains: Array<string> }) {
  const userDomains = splitWordsByDelimiter(text)
  const updatedDomains = [...new Set([...previousDomains, ...userDomains])].sort()
  const feedback = createFeedbackMessage(updatedDomains)
  return { feedback, updatedDomains }
}
