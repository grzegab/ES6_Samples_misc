import getRepo from './servie';

export default function () {
    // getRepo().then(payload => console.log(payload));
    getRepo().then(arr => alert(arr.length));
}