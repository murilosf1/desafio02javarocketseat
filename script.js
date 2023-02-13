const students = [
  {
    name: "Luiz",
    firstNote: 10,
    secondNote: 10,
  },
  {
    name: "Robert",
    firstNote: 10,
    secondNote: 10,
  },
  {
    name: "Nike",
    firstNote: 5,
    secondNote: 5,
  },
]

function printStudentsAverage(students) {
  let media = ((students.firstNote + students.secondNote) / 2).toFixed(2)
  if (media >= 7) {
    return ` A média do(a) aluno(a) ${students.name} é: ${media}\n Parabéns ${students.name}! Você foi aprovado(a) no concurso!
  `
  } else {
    return ` A média do(a) aluno(a) ${students.name} é: ${media}\n Não foi dessa vez ${students.name}! Tente novamente!
  `
  }
}

for (let student of students) {
  let result = printStudentsAverage(student)
  alert(result)
}
