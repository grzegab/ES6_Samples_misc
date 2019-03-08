export default async function fetchJoke(URL) {
    try {
        const response = await fetch(URL);

        if (response.ok) {
            return (await response.json());
        }

        // If response code was != 200.
        throw Error('JOKE not found or any other error ...');
    } catch (err) {
        // Show the error to console.
        console.warn(err);

        return false;
    }
}