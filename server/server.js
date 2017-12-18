require("dotenv").config();
const express = require("express")
    , bodyParser = require("body-parser")
    , massive = require("massive")
    , app = express()
    , PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));


// create a bio
app.post('/api/create/bios', (req, res) => {
    const db = req.app.get('db')
    const { fullname, date_of_birth, place_of_birth, how_tall, body } = req.body;

    db.post_bio([fullname, date_of_birth, place_of_birth, how_tall, body])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
});


// get specific bio
app.get(`/api/get/bios/:yourname`, (req, res) => {
    const db = req.app.get('db')

    db.get_bio_byname([req.params.yourname])
        .then(bio => {
            res.status(200).send(bio)
        }).catch(err => res.status(500).send(err))
});

//update spectic bio
app.put('/api/update/bios/:yourname', (req, res) => {
    const db = req.app.get('db')

    db.update_bio([req.params.yourname])
        .then(bio => {
            res.status(200).send(bio)
        }).catch(err => res.status(500).send(err))
});

//delete specific bio
app.delete('/api/delete/bios/:yourname', (req, res) => {
    const db = req.app.get('db')

    db.delete_bio([req.params.yourname])
        .then(bio => {
            res.status(200).send(bio)
        }).catch(err => res.status(500).send(err))
});