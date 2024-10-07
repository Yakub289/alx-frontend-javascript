export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter to get students in the specified city
  const studentByCity = studentList.filter((student) => student.location === city);

  // Use map to update grades
  const updatedStudents = studentByCity.map((student) => {
    // Find the grade object for the student in newGrades array
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    // If grade is found, update else set N/A
    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';

    // Return a new obj with updated grade
    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedStudents;
}
