import { html, TemplateResult } from 'lit';
import '../src/wc-button.js';

export default {
  title: 'WcButton',
  component: 'wc-button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <wc-button style="--wc-button-background-color: ${backgroundColor}" .header=${header}></wc-button>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
