import { version } from './package.json'

const manifest = {
  name: 'Web Buddy - Website Blocker',
  description: 'Block unwanted websites instantly and stay focused while browsing. With anti-porn preset.',
  version: version,
  manifest_version: 3,
  icons: {
    '16': 'src/assets/logo-16.png',
    '32': 'src/assets/logo-32.png',
    '48': 'src/assets/logo-48.png',
    '128': 'src/assets/logo-128.png',
  },
  action: {
    default_popup: 'src/popup/popup.html',
    default_icon: {
      '16': 'src/assets/logo-16.png',
      '32': 'src/assets/logo-32.png',
      '48': 'src/assets/logo-48.png',
      '128': 'src/assets/logo-128.png',
    },
  },
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  options_ui: {
    page: 'src/options/options.html',
    open_in_tab: true,
  },
  permissions: ['storage', 'declarativeNetRequest', 'declarativeNetRequestFeedback'],
  host_permissions: ['<all_urls>'],
}

export default manifest
