const db = require("../config/db");

const getEducationLevels = (callback) => {
  db.query("SELECT * FROM education_levels", callback);
};

const selectEducationLevel = (id, callback) => {
  db.query("UPDATE education_levels SET selected = !selected WHERE id = ?", [id], callback);
};

module.exports = { getEducationLevels, selectEducationLevel };
