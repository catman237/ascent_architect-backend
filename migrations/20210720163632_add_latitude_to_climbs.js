
exports.up = function(knex) {
  return knex.schema.table('climbs', function(t) {
      t.float('latitude')
  })
};

exports.down = function(knex) {
  return knex.schema.table('climbs', function(t) {
      t.dropColumn('latitude')
  })
};
