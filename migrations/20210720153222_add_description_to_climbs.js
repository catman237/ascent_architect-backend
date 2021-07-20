
exports.up = function(knex) {
  return knex.schema.table('climbs', function(t) {
      t.text('description')
  })
};

exports.down = function(knex) {
  
};
