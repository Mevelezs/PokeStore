const { Client } = require('pg');

async function getConnection() {
  const client = new Client(
    {
      host: 'localhost',
      port: 5432,
      user: 'mauricio',
      password: 'admin123',
      database: 'poke_store',
    },
  );
  await client.connect();
  return client;
}

module.exports = getConnection;
