import readDatabase from "../utils";

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((studentsByField) => {
        let output = "This is the list of our students\n";
        const sortedFields = Object.keys(studentsByField).sort((a, b) =>
          a.localeCompare(b, undefined, { sensitivity: "base" })
        );

        sortedFields.forEach((field) => {
          output += `Number of students in ${field}: ${
            studentsByField[field].length
          }. List: ${studentsByField[field].join(", ")}\n`;
        });

        response.status(200).send(output);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== "CS" && major !== "SWE") {
      response.status(500).send("Major parameter must be CS or SWE");
      return;
    }

    readDatabase(process.argv[2])
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        response.status(200).send(`List: ${students.join(", ")}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

export default StudentsController;
