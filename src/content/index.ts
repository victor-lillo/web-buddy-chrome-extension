import Counter from '../components/Counter.svelte'
import { storage } from '../utils/storage'

// Some global styles on the page
import './styles.css'

// Some JS on the page
storage.get().then(console.log)

// Some svelte component on the page
new Counter({ target: document.body })
