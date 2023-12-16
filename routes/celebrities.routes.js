// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');
// all your routes here

router.get('/celebrities/create' ,(req,res) => {
    res.render('celebrities/new-celebrity', {bgPage: 'create-celebrities bg-page'})
})

router.get('/celebrities/veiw-all-celebrities' ,(req,res) => {
    Celebrity.find()
        .then((foundCelebrities) => {
            console.log('found Celebrities', foundCelebrities)
            res.render('celebrities/celebrities', {foundCelebrities, bgPage: 'create-celebrities bg-page', container: 'list-celebrities'})
        })
        .catch((err) => console.log((err)))
})

router.post('/celebrities/create', (req, res) => {
    Celebrity.create(req.body)
        .then(() => {
            res.redirect('/celebrities/veiw-all-celebrities');
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post('/celebrities/:celebId/delete', (req, res) => {
    const { celebId } = req.params
    Celebrity.findByIdAndDelete(celebId)
        .then(() => {
            res.redirect('/celebrities/veiw-all-celebrities')
        })
})

module.exports = router;