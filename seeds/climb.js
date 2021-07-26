
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('climbs').del()
    .then(function () {
      // Inserts seed entries
      return knex('climbs').insert([
        {name: 'Annihilator', grade: '513d', description: "A very picturesque thin crack working right of the middle of the large overhanging prow. Very bouldery and hard crux pulling through the steep section at the bottom. Once you are through the crux keep working up the thin overhanging crack, and have fun!", sessions: 1, sent: false},
        {name: 'Fancy Feet', grade: '5.13b', description: "Get out your dancing shoes for this trickster.  Good fun.", sessions: 5, sent: false},
        {name: 'Wheres Waldo', grade: 'v12', description: "Sit Start on the crack. Pull a big move to a crimp and work across the face to the arete on the left side of the boulder. Top out from there. Super cool movement for an easy problem.", sessions: 9, sent: false},
      ]);
    });
};
