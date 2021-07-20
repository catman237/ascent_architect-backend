
exports.up = function(knex) {
  return knex.schema.table('climbs', function(t) {
      t.integer('location')
  })
};

exports.down = function(knex) {
  
};
