// read the database file synchronously
const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");

    const lines = data.split("\n").filter((line) => line.trim() !== "");

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const studentsByField = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(",");
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(", ")}`
      );
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
