import w3 from './w3.css';

export class Header extends HTMLElement {
    constructor() {
        super();
        const header = document.createElement('header');
        header.className = w3["w3-badge"];
        header.innerHTML = `<header class="${w3["w3-border-light-blue"]}">I'm a paragraph</header>`;
        this.appendChild(header);
    }
}

export class Paragraph extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }

    static get observedAttributes() {
        return ['some-paragraph-attribute'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        this.clean();
        const paragraph = document.createElement('paragraph');
        paragraph.textContent = `<p>Test paragraph</p>`;
        this.shadowRoot.appendChild(paragraph);
    }

    clean() {
        this.shadowRoot.childNodes.forEach(child => child.remove());
    }
}