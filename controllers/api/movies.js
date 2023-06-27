const Movies = require("../../models/movie");

async function indexMovie(req, res) {
    const fetch = require('node-fetch');

    const url = 'https://api.themoviedb.org/3/movie/popular';
    const apiKey = '4c4f57ef13da5f104cd4abd08114dd18';
    const options = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
    };

    try {
        const rizz = await fetch(`${url}?api_key=${apiKey}`, options);
        const result = await rizz.json();
        res.json(result);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
  indexMovie,
};
