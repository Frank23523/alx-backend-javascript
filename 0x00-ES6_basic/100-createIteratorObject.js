export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  return {
    * [Symbol.iterator]() {
      for (const department of departments) {
        for (const employee of department) {
          yield employee;
        }
      }
    },
  };
}
