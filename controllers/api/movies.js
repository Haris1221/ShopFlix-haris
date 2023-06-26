const Movies = require('../../models/movie')

function indexMovie(req, res) {
    Movies.find({})
    .then(movieDoc => {
        
    })
    .catch('error finding movies')
}

module.exports = {
    indexMovie
}