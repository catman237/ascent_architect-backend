
exports.up = function(knex) {
  return knex.schema.table('climbs', function(t) {
      t.dropColumn('location')
  })
};

exports.down = function(knex) {
  return knex.schema.table('climbs', function(t) {
      t.addCloumn('location')
  }) 
};
