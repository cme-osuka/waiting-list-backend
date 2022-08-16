// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: ":memory:",
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, "migrations")
    },
    useNullAsDefault: true
  },
  development: {
    client: 'sqlite3',
    connection: ":memory:",
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, "migrations")
    },
    useNullAsDefault: true
  },
};
