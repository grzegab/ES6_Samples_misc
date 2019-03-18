import { dom } from '@fortawesome/fontawesome-svg-core';

export class MyPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    async render() {
        this.loading();

        const icon = document.createElement('i');
        icon.className = 'fab fa-github-square fa-10x';

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper-for-icon';
        wrapper.appendChild(icon);

        // Pretend fetching data.
        setTimeout(() => {
            this.clean();
            this.appendChild(wrapper);
            dom.i2svg();
        }, 3000);
    }

    loading() {
        const spinner = document.createElement('i');
        spinner.className = 'fas fa-spinner fa-spin fa-6x';
        this.appendChild(spinner);
        dom.i2svg();
    }

    clean() {
        this.innerHTML = '';
    }
}