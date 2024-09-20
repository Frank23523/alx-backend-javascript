// small HTTP server
const http = require('http');
const fs = require('fs').promises;

const port = 1245;
const host = 'localhost';

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

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      const studentsInfo = await countStudents(process.argv[2]);
      res.end(studentsInfo);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
