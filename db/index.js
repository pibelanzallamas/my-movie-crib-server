const Sequelize = require("sequelize");
const db = new Sequelize(
  "cqohjzzp",
  "cqohjzzp",
  "WJdigDYKSuDbXYFOvB7sjUtkRsAvsPDf",
  {
    host: "suleiman.db.elephantsql.com",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
