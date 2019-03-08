import convert from './converter';

export default () => {
    const ghRepoMock = {
        name: 'brains',
        stargazers_count: 32,
        license: {spdx_id: 'MIT'}
    };

    const result = {
        name: 'brains',
        stars: 32,
        license: 'MIT'
    };

    let converted = convert(ghRepoMock);
}
