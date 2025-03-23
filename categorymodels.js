const db = require("../config/db");

const getLearningCategories = (callback) => {
  db.query("SELECT * FROM learning_categories", callback);
};

const selectLearningCategory = (id, callback) => {
  db.query("UPDATE learning_categories SET selected = !selected WHERE id = ?", [id], callback);
};

module.exports = { getLearningCategories, selectLearningCategory };
