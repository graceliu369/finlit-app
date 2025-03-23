const Education = require("../finlit-app/educationmodel");

exports.getEducationLevels = (req, res) => {
  Education.getEducationLevels((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.selectEducationLevel = (req, res) => {
  const { id } = req.body;
  Education.selectEducationLevel(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Education level updated successfully." });
  });
};
