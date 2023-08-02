import { DOMAIN_REGEX } from './../DEFAULTS'
// Validates domains with subdomains, without protocol

function splitWordsByDelimiter(str: string) {
  const wordsArray = str.split(/[,\s\n]/).map((palabra) => palabra.trim())
  return wordsArray.filter((el) => DOMAIN_REGEX.test(el))
}

function createFeedbackMessage(numberOfNewDomains: number) {
  return numberOfNewDomains > 0 ? `✅ Successfuly added ${numberOfNewDomains} domain(s)` : `😔 No domains were added`
}
export function processDomainsTextarea({ text, previousDomains }: { text: string; previousDomains: Array<string> }) {
  const userDomains = splitWordsByDelimiter(text)
  const updatedDomains = [...new Set([...previousDomains, ...userDomains])].sort()
  const numberOfNewDomains = updatedDomains.length - previousDomains.length
  const feedback = createFeedbackMessage(numberOfNewDomains)
  return { feedback, updatedDomains }
}
