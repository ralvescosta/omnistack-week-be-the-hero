/* eslint-disable semi */
/* eslint-disable quotes */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});
console.log(process.env.DB_DIALECT);
module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_POST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB,
  synchronize: false,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
};
