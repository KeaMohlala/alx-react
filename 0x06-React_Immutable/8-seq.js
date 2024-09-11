import { Seq } from 'immutable';

export function printBestStudents(object) {

  const studentsSeq = Seq(object);

  const bestStudents = studentsSeq.filter(student => student.score >= 70);

  const formattedStudents = bestStudents.map(student => ({
    score: student.score,
    firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1).toLowerCase(),
    lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1).toLowerCase()
  }));

  console.log(formattedStudents.toJS());
}
