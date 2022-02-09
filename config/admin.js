module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26e55e29e783ed79dfa1c8d487cdc2b2'),
  },
});
