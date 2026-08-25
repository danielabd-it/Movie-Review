require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  URI: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.f7roy.mongodb.net/Assignment3`
  // Construct MongoDB URI using environment variables to hide password and username
};
