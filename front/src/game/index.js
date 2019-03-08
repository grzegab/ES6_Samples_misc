import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import {increaseAttemps, getAttempsCount} from './attemps';

export default () => {
    let num = getNum();
    while (num !== TO_FIND) {
        increaseAttemps();
        info(num, TO_FIND);
        num = getNum();
    }
    success(getAttempsCount());
}