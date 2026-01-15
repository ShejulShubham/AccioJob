function StudentInfo() {
  const studentName = "Shubham Shejul";
  const course = "React Essentials";
  const sessionTime = "9:30AM batch";

  return (
    <>
      <h1>Student Information</h1>
      <h2>
        <strong>Student Name: </strong>
        {studentName}
      </h2>
      <p>
        <strong>Course: </strong>
        {course}
      </p>
      <p>
        <strong>Session Time: </strong>
        {sessionTime}
      </p>
    </>
  );
}

export default StudentInfo;
