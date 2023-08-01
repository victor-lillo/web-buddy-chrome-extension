<script lang="ts">
  import { extension } from '../utils/extensionData'

  export let relativeTime: string
  export let originUrl: string
</script>

<section>
  <h1>Don't give up, you're doing great!</h1>

  <p>{extension.name()} has prevented the following page from loading:</p>
  <code>
    {originUrl}
  </code>
  <p>
    You have been blocking garbage since <strong>{relativeTime}</strong>, stay focused!
  </p>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 80ch;
  }

  h1 {
    color: var(--color-dark-2);
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  code {
    background-color: var(--color-dark-13);
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
  }

  strong {
    font-weight: var(--font-weight-bold);
  }
</style>
