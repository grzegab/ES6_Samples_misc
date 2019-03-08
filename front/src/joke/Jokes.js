/* This is a model. */

export default class Jokes {
    constructor({type, question, joke}) {
        this.type = type;
        this.question = question;
        this.joke = joke;
    }

    toString() {
        return this.question ? `
        - ${this.question}
        - ${this.joke}`
            : `Joke: ${this.joke}`;
    }
}