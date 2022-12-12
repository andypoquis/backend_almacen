module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-118.railway.app'),
      port: env.int('DATABASE_PORT', 6628 ),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'vY5RXl1oaPle58zeFapF'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
 


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'warehouse_db'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'animes57xz'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
 
