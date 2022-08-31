const alunos = ['João', 'Juliana', 'Joaquim', 'Marcelo', 'Marcos', 'Meic'];

const turma_A = alunos.slice(0, alunos.length / 2);
const turma_B = alunos.slice(alunos.length/2);

console.log(`Alunos da turma A: ${turma_A}`);
console.log(`Alunos da turma B: ${turma_B}`);