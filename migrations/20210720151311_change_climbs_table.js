
exports.up = function(knex, Promise) {
  return knex.schema.table('climbs', function(t) {
      t.dropColumn('desrciption')
  })
};

exports.down = function(knex) {
  
};
