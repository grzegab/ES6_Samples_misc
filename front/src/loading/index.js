import { MyPage } from "./component";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function () {
    library.add(faGithubSquare);
    library.add(faSpinner);

    customElements.define('some-component-delay', MyPage);
}