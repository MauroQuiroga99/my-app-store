const { Client } = require('pg');

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5423,
    user: 'postgres',
    password: '1004344985mauu',
    database: 'my_store',
  });

  //debe ser de forma asincrona
  await client.connect();
  return client;
};

module.exports = getConnection;
