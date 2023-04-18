const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET REQUEST
router.get('/', (req, res) => {
    console.log('In GET request');
    let queryText = 'SELECT * from "feedback"';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

//POST REQUEST
router.post('/', (req, res) => {
    console.log('POST in req.body', req.body);
    let queryText = `INSERT INTO "feedback" ("wellness", "goofyness", "support", "comments") 
                     VALUES ($1, $2, $3, $4);`;
    let { wellness, goofyness, support, comments } = req.body;
    pool.query(queryText, [wellness, goofyness, support, comments])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

//DELETE ENTRY
router.delete('/:id', (req, res) => {
    console.log('In DELETE request');
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

module.exports = router;