import randomJoke from './service';

export default async function () {
    alert((await randomJoke()).toString());
}