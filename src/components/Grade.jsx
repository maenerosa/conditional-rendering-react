function Grade(grade) {
  let gradeMessage;

  switch (grade) {
    case "A":
      gradeMessage = "Excellent";
      break;
    case "B":
      gradeMessage = "Good Job";
      break;
    case "C":
      gradeMessage = "You passed";
      break;
    case "D":
      gradeMessage = "You need to work harder";
      break;
    case "F":
      gradeMessage = "You Failed";
      break;
    default:
      gradeMessage = "Invalid grade";
  }

  return (
    <div>
      <h2>Your grade is {grade}</h2>
      <p>{gradeMessage}</p>
    </div>
  );
}

export default Grade;
