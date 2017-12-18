//COMP 72C DEMONSTRATE NODE FILES (everything works)

require("dotenv").config();
const express = require("express")
    , bodyParser = require("body-parser")
    , massive = require("massive")
    , app = express()
    , PORT = 8080;

//COMP 76F BODY PARSER
app.use(bodyParser.json());
//COMP 74C INVOKE EXPRESS
app.use(express.static(`${__dirname}/../build`));

//COMP 70C 70F 70K MASSIVE CONNECTION, DB FOLDER, QUERY FUNCTION
massive(process.env.CONNECTION_STRING).then((db) => {
    console.log('db is connected');
    app.set('db', db);
});

// create a bio
//COMP 74D-3 .POST
app.post('/api/bios', (req, res) => {
    const db = req.app.get('db')
    const { fullname, date_of_birth, place_of_birth, how_tall, body } = req.body;

    db.post_bio([fullname, date_of_birth, place_of_birth, how_tall, body])
        .then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
});


// get specific bio
//COMP 74D-1 .GET
app.get(`/api/bios/id/:bioID`, (req, res) => {
    const db = req.app.get('db')

    db.get_bio_byid([req.params.bioID])
        .then(bio => {
            res.status(200).send(bio)
        }).catch(err => res.status(500).send(err))
});

// get bios by name
app.get(`/api/bios/name`, (req, res) => {
    if (req.query.fullname) {
        const db = req.app.get('db')

        db.get_bio_byname([req.query.fullname])
            .then(bio => {
                res.status(200).send(bio)
            }).catch(err => res.status(500).send(err))
    }
});

//update spectic bio
//COMP 74D-2 .PUT
app.put('/api/bios/:yourname', (req, res) => {
    const db = req.app.get('db')
    const { fullname, date_of_birth, place_of_birth, how_tall, body } = req.body;


    db.update_bio([fullname, date_of_birth, place_of_birth, how_tall, body, req.params.yourname])
        .then(bio => {
            res.status(200).send(bio)
        }).catch(err => res.status(500).send(err))
});

//delete specific bio
//COMP 74D-4 .DELETE
app.delete('/api/bios/:bioID', (req, res) => {
    const db = req.app.get('db')

    db.delete_bio([req.params.bioID])
        .then(bio => {
            res.status(200).send(bio)
        }).catch(err => res.status(500).send(err))
});

app.listen(PORT, () => (console.log(`Listening on port ${PORT}`)));