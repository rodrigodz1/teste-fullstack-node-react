const path = require("path");

require("dotenv").config({
    path:
      path.resolve(__dirname, "../../.env"),
});

  module.exports = {
    //url: process.env.DATABASE_URL,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    define: {
        timestamps: true,
        underscored: true,
    },
    logging: false, //logs das queries sql
  };
  
