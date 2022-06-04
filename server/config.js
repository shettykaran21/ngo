module.exports = {
  port: process.env.PORT || 8080,
  db: {
    url: process.env.MONGODB_URI,
  },
};
