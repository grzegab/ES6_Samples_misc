import fetchJoke from './jokeApi';
import Jokes from './Jokes';

const OFFICIAL_JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';
const NERD_JOKE_URL = 'http://api.icndb.com/jokes/random';

export default async function randomJoke() {

    const officialJoke = await fetchJoke(OFFICIAL_JOKE_URL);
    if (officialJoke.type === 'programming') {
        return new Jokes(officialJoke);
    } else {
        const nerdJoke = await fetchJoke(NERD_JOKE_URL);
        if (nerdJoke) {
            const {value: {joke}} = nerdJoke; // { value: { joke } } === { value: { joke: joke } }
            return new Jokes({type: 'nerd', joke: joke});
        } else {
            // Fallback in json.
            return new Jokes({
                type: 'fallback',
                question: 'How many programmers does it take to change a lightbulb?',
                joke: 'None. It doesn\'t exists'
            });
        }

    }
}