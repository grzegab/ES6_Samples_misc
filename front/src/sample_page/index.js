import { Header, Paragraph } from './component';

export default () => {
    customElements.define('some-header', Header);
    customElements.define('some-paragraph', Paragraph);
};