const Sequelize = requires("sequelize");
const pkg = require("../../package.json");

const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`);

module.exports = db;
