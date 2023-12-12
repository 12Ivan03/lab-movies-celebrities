// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require('../models/Movies.model');
const Celebrity = require('../models/Celebrity.model');

router.get('/create', (req, res) => {
    Celebrity.find()
        .then((dbCelebrities) => {
            console.log('All movies:',dbCelebrities)
            res.render('movies/new-movie', { dbCelebrities } )
        })
        .catch((err) => console.log(err))
})

router.get('/movies', (req, res) => {
    Movie.find()
        .populate('cast')
        .then((foundMovies) => {
            console.log(foundMovies)
            res.render('movies/movies', { casts: foundMovies })
        })
})

router.post('/create', (req, res) => {
    Movie.create(req.body)
        .then(() => {
            res.redirect('movies')
        })
        .catch((err) => console.log(err))
}) 


router.get('/movies-details/:movieId', (req, res) => {
    const {movieId} = req.params

    Movie.findById(movieId)
        .populate('cast')
        .then((foundMovie) => {
            res.render('movies/movies-details', { movie: foundMovie})
        })
})

module.exports = router;