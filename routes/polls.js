const express = require('express');
const connection = require('../connection');
const router = express.Router();

// create poll
router.post('/create', (req, res, next) => {
    let polls = req.body;
    query = "insert into polls (questions,Options,user_data,poll_analytics) values(?,?,?,?)";
    connection.query(query, [polls.questions, polls.Options, polls.user_data, polls.poll_analytics], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "Poll added Succesfully" });
        }
        else
            return res.status(500).json(err);
    });
});

// read poll 
router.get('/read', (req, res, next) => {
    var query = "select *from polls";
    connection.query(query, (query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        }
        else {
            return res.status(500).json(err);
        }
    }));
});

// update a specific poll
router.patch('/update/:id', (req, res, next) => {
    const id = req.params.id;
    let polls = req.body;
    var query = "update polls set questions=?,Options=?,user_data=?,poll_analytics=? where id=?";
    connection.query(query, [polls.questions, polls.Options, polls.user_data, polls.poll_analytics, id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Poll id does not found" });
            }
            return res.status(200).json({ message: "Poll updated Succesfully" });
        }
        else {
            return res.status(500).json(err);
        }
    });
});

// delete a specific poll
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    var query = "delete from polls where id=?";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Poll id does not found" });
            }
            return res.status(200).json({ message: "Poll deleted Succesfully" });
        }
        else {
            return res.status(500).json(err);
        }
    });
});

module.exports = router;