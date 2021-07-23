
exports.up = function(knex) {
  return knex.schema.table('climbs', t => {
      t.integer('sessions')
  })
};

exports.down = function(knex) {
  return knex.schema.table('climbs', t => {
      t.dropColumn('sessions')
  })
};
