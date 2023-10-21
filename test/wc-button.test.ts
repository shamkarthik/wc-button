import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { WcButton } from '../src/wc-button.js';
import '../src/wc-button.js';

describe('WcButton', () => {
  let element: WcButton;
  beforeEach(async () => {
    element = await fixture(html`<wc-button></wc-button>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
