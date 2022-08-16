// Update with your config settings.
const path = require("path");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: ":memory:",
    migrations: {
      tableName: 'knex_migrations',
    },
    useNullAsDefault: true
  },

};
