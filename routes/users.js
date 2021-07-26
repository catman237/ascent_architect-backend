const express = require('express')
const router = express.Router()
const config = require('../knexfile').development
const knex = require('knex')(config)


router.get('/users', (_, res) => {
    knex('climbs').then(data => res.json(data))
})