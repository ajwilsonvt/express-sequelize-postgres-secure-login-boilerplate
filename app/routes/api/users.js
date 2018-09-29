const express = require('express');
const db = require('../../models');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  db.user.findAll()
    .then(users => res.json({ users }))
    .catch(error => res.status(500).json({ error: error.message }));
});

/* GET user. */
router.get('/:userId', (req, res) => {
  db.user.find({
    where: { id: req.params.userId },
  })
    .then(user => res.json({ user }))
    .catch(error => res.status(500).json({ error: error.message }));
});

module.exports = router;
