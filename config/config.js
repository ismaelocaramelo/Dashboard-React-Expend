module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost/expend-dashboard',
  api: 'http://localhost:3000',
  secret: 'supersecret'
};
