// recreation of a small HTTP server using Express
const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    let output = `Number of students: ${students.length}\n`;

    const studentsByField = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    for (const [field, fieldStudents] of Object.entries(studentsByField)) {
      output += `Number of students in ${field}: ${
        fieldStudents.length
      }. List: ${fieldStudents.join(', ')}\n`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    const studentsInfo = await countStudents(databasePath);
    res.send('This is the list of our students\n' + studentsInfo);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
