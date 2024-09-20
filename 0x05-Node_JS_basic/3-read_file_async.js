// read the database file asynchronously and return a Promise
const fs = require("fs").promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8")
      .then((data) => {
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

        resolve();
      })
      .catch(() => {
        reject(new Error("Cannot load the database"));
      });
  });
}

module.exports = countStudents;
