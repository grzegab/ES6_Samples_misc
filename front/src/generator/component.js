import { getNextPost } from './service';

export class BlogPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.generator = getNextPost();
        this.currentPost = this.generator.next();
        this.render();
    }

    attachClickCallbacks() {
        this.shadowRoot.getElementById('nextPost').onclick = () => {
            this.currentPost = this.generator.next();
            this.render();
        };
    }

    render() {
        this.clean();
        const paragraph = document.createElement('paragraph');

        paragraph.textContent = `Blog Post Text: ${this.currentPost.value.data}`;
        paragraph.className = 'blog-text';
        this.shadowRoot.appendChild(paragraph);

        const button = document.createElement('button');
        button.className = 'next';
        button.id = 'nextPost';
        button.textContent = 'Next item';

        if (!this.currentPost.done) {
            this.shadowRoot.appendChild(button);
            this.attachClickCallbacks();
        }
    }

    clean() {
        this.shadowRoot.innerHTML = '';
    }
}