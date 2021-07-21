// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'climbsdb'
    }
  },
   production: {
    client: 'pg',
    connection: 'process.env.postgres://hwduvkfaewqjum:a6b46c0b912cd4'
  }

};
