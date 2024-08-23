import React from 'react';

const StudentDetails = ({ student }) => {
  const { name, marks } = student;

  const totalMarks = marks.reduce((total, mark) => total + mark, 0);

  return (
    <div>
      <h2>{name}'s Marks Details</h2>
      <ul>
        {marks.map((mark, index) => (
          <li key={index}>Subject {index + 1}: {mark}</li>
        ))}
      </ul>
      <p>Total Marks: {totalMarks}</p>
    </div>
  );
};

const MarkDetails = ({ students }) => {
  return (
    <div>
      <h1>Mark Details of Students</h1>
      {students.map((student, index) => (
        <StudentDetails key={index} student={student} />
      ))}
    </div>
  );
};

const students = [
  { name: 'John', marks: [80, 85, 90] },
  { name: 'Alice', marks: [75, 82, 88] },
  { name: 'Bob', marks: [90, 88, 92] }
];

const App = () => {
  return <MarkDetails students={students} />;
};

export default App;
