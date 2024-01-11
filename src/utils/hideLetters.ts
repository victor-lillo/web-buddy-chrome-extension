const DOT_CHAR = '•'

export function hideCharacters(domain: string) {
  const firstChar = domain.charAt(0)
  const hiddenDomain = firstChar + domain.slice(1).replace(/[a-zA-Z0-9]/g, DOT_CHAR)
  return hiddenDomain
}
