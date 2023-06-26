const Movies = require('../../models/movie')

async function indexMovie(req, res) {
    const fetch = require('node-fetch');

const url = 'https://streamlinewatch-streaming-guide.p.rapidapi.com/movies?region=US&sort=popularity&sources=netflix%2Chulu&offset=0&limit=100';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4b39254938msh2b946a65cb5c04bp175abejsn1cdec1eecffa',
        'X-RapidAPI-Host': 'streamlinewatch-streaming-guide.p.rapidapi.com'
    }
};


try {
    const rizz = await fetch(url, options);
    const result = await rizz.json();
     res.json(result)
} catch (error) {
    console.error(error);
}
}

module.exports = {
    indexMovie
}