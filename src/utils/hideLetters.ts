const DOT_CHAR = '•'
export function hideLetters(domain: string) {
  const firstChar = domain.charAt(0)
  const hiddenDomain = firstChar + domain.slice(1).replace(/[a-zA-Z]/g, DOT_CHAR)
  return hiddenDomain
}
