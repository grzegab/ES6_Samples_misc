const URL = 'https://api.github.com/users/grzegab/repos';
const FORBIDDEN_REPOSITORIES = ['docker_php', 'PHP_Samples_misc'];

const convert = ({name, stargazers_count: stars, license: {spdx_id: license} }) => ({
    name,
    stars,
    license
});

export default function getRepo() {
    return fetch(URL)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
            throw Error('Response different than 200.');
        })
        .catch(err => console.warn(err))
        .then(arr => arr.filter(repo => !FORBIDDEN_REPOSITORIES.includes(repo.name)));
}