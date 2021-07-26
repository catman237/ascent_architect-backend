
exports.up = function(knex) {
  return knex.schema.table('climbs', t => {
    t.boolean('sent')
  })
};

exports.down = function(knex) {
  return knex.schema.table('climbs', t => {
      t.dropColumn('sent')
  })
};
