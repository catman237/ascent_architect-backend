
exports.up = knex => knex.schema.createTable('climbs',table => {
    table.increments('id').primary()
    table.string('name')
    table.string('grade')
    table.text('desrciption')
}
) 



exports.down = knex => knex.schema.dropTable('climbs')
