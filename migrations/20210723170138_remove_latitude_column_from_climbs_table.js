
exports.up = function(knex) {
    return knex.schema.table('climbs', function(t) {
        t.dropColumn('latitude')
    })
};

exports.down = function(knex) {
  return knex.schema.table('climbs', t => {
      t.addColumn('latitude')
  })
};
