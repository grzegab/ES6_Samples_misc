const RAW_URL = 'https://raw.githubusercontent.com/mat3e/mat3e.github.io/master/blog/en/';

async function getRawFile(pathToFile = 'about-me.md') {
    try{
        const response = await fetch(`${RAW_URL}${pathToFile}`);
        if (response.ok) {
            return (await response.text());
        }
        throw ('Other than 200.');
    } catch (err) {
        console.warn(err);
        return '';
    }
}

export async function getSomePage() {
    return getRawFile('about-me.md');
}