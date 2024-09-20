const fs = require("fs").promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const lines = data.split("\n").filter((line) => line.trim() !== "");
    const students = lines.slice(1);

    const studentsByField = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(",");
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    return studentsByField;
  } catch (error) {
    throw new Error("Cannot load the database");
  }
};

module.exports = readDatabase;
