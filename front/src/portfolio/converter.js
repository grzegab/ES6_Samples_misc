export default ({name, stargazers_count: stars, license: {spdx_id: license} }) => ({
    name,
    stars,
    license
});