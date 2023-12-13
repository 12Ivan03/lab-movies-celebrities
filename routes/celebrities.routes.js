// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');
// all your routes here

router.get('/celebrities/create' ,(req,res) => {
    res.render('celebrities/new-celebrity')
})

router.get('/celebrities/celebrities' ,(req,res) => {
    Celebrity.find()
        .then((foundCelebrities) => {
            console.log('found Celebrities', foundCelebrities)
            res.render('celebrities/celebrities', {foundCelebrities})
        })
        .catch((err) => console.log((err)))
    
})

router.post('/celebrities/create', (req, res) => {
    Celebrity.create(req.body)
        .then(() => {
            res.redirect('celebrities'); // Redirect to the route that displays all celebrities
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/celebrities/new-celebrity'); // Redirect to the form in case of an error
        });
});

module.exports = router;