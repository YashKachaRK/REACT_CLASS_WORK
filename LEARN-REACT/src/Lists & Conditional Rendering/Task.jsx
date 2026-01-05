import { useState } from "react";

function Task() {
  const students = [
    { id: 1, name: "Yash", marks: 85, passed: true },
    { id: 2, name: "Mitansu", marks: 45, passed: false },
    { id: 3, name: "Dhruv", marks: 75, passed: true },
    { id: 4, name: "Vandan", marks: 35, passed: false },
    { id: 5, name: "Vandan", marks: 35, passed: false },
  ];
  const [showPassing, setShowPassing] = useState(false);

  const passingStudents = students.filter(
    (studentPass) => studentPass.passed
  ).length;
  const notpassingStudents = students.filter(
    (studentPass) => !studentPass.passed
  ).length;

  return (
    <div>
      <p>Show All Students with highlight </p>
      <ul>
        {students.map((studentId) => (
          <li key={studentId.id}>
            {studentId.name} {studentId.marks}{" "}
            {studentId.passed ? "Passed ✅" : "Failed ❌"}
          </li>
        ))}
      </ul>

      <br />
      <p>Total Passing Students: {passingStudents}</p>
      <p>Total Fails Students: {notpassingStudents}</p>

      <br />

      <button onClick={() => setShowPassing(!showPassing)}>
        {showPassing ? "Show All students" : "Show only Passed Studem"}
      </button>
      <ul>
        {students
          .filter((studentss) => !showPassing || studentss.passed)
          .map((studentss) => (
            <li
              key={studentss.id}
              style={{ color: studentss.passed ? "green" : "red" }}
            >
              {studentss.name} - {studentss.marks} -{" "}
              {studentss.passed ? "Passed ✅" : "Failed ❌"}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Task;
