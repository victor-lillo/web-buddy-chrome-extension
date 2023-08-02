import { NSFW_SITES } from '../sites/nsfw'
export const STORAGE_KEYS = {
  installDate: 'installDate',
  blockedDomains: 'blockedDomains',
}

export const TEXTAREA_PLACEHOLDER = `Insert here the domains (with extension) you want to block.
Separate them by comma, space or line break.
  ✅ url1.com, domain2.io
  ❌ url1, domain2.io/page
`
export const URL_PARAM_ORIGIN = 'origin'

export const DEFAULT_BLOCKED_URLS = NSFW_SITES
