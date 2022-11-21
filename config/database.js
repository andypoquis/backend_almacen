module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-136.railway.app'),
      port: env.int('DATABASE_PORT', 7518),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '7h536LIhxzU7Wrugj0JG'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
 