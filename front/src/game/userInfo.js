import {TOO_SMALL, TOO_BIG} from './info';

export default (num, expected) => {
    num > expected ? alert(TOO_BIG) : alert(TOO_SMALL);
}