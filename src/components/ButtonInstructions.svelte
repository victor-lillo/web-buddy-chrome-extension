<script>
  import Button from './Button.svelte'
  import Close from './icons/Close.svelte'
  import Dialog from './Dialog.svelte'
  import Help from './icons/Help.svelte'

  let dialog
</script>

<Button type={'button'} variant="secondary" handleClick={() => dialog.showModal()} text={'Instructions'}>
  <Help />
</Button>

<Dialog bind:dialog onClick={() => dialog.close()}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <section on:click|stopPropagation>
    <h1>Instructions</h1>
    <p>
      Domains will be extracted from the text splitting it with <code>commas</code>, <code>spaces</code> or
      <code>break lines</code> as delimiters.
    </p>
    <p>Then, each element will be validated as domain.</p>
    <code class="code-block">
      <p>✅ domain1.com, subdomain.domain2.net domain3.io</p>
      <p>❌ https://domain1.com</p>
      <p>❌ domain2.com/page</p>
      <p>❌ domain3</p>
    </code>

    <div>
      <Button
        ariaLabel="Close dialog"
        type="button"
        text="Close"
        handleClick={() => dialog.close()}
        variant="secondary"
      >
        <Close />
      </Button>
    </div>
  </section>
</Dialog>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: var(--font-weight-bold);
  }

  code {
    display: inline-flex;
    white-space: nowrap;
    width: fit-content;
    background-color: var(--color-accent-grey);
    font-size: 0.9rem;
    border-radius: var(--border-radius);
    padding: 0.1rem 0.35rem;
  }

  .code-block {
    flex-direction: column;
    padding: 0.5rem 1rem;
    width: 100%;
  }
  div {
    align-self: center;
  }
</style>
