const express = require('express');
const router = express.Router();
const config = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config);

/* GET climbs listing. */
router.get('/', function (_, res) {
  knex('climbs').then(data => res.json(data));
});

router.get('/:id', function (req, res) {
  knex('climbs')
  .where('id', req.params.id)
  .first()
  .then(data => res.json(data))
})

router.post('/', function (req, res) {
  const climb = req.body
  knex("climbs")
  .insert(climb)
  .returning('*')
  .then(climb => res.send(climb))
})

router.delete('/:id', function (req, res) {
  const id = req.params.id
  knex('climbs')
  .where('id', id)
  .delete()
  .then(data => res.json(data))
})


router.patch('/:id', function (req, res) {
  const climb = req.body
  knex('climbs')
  .where('id', req.params.id)
  .update(climb)
  .then(climb => res.send(climb.body))
})


module.exports = router;
