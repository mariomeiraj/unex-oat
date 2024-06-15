// Atividade:
// Escolha um problema simples para resolver, pode ser um que já tenha sido resolvido nas atividades anteriores.
// Implemente um algoritmo, agora em JavaScript, que resolva o problema escolhido.
// Utilize esstruturas condicionais e/ou laços de repetição na sua estrutura;
// Teste o programa para garantir que ele funcione corretamente em diferentes cenários.
// Submeta o código fonte da sua implementação, em uma pasta compactada, junto com uma breve explicação do funcionamento do seu código.

// Critérios de Avaliação:

// Implementação do algoritmo em JavaScript, utilizando estruturas condicionais e/ou laços de repetição.
// Funcionamento adequado do programa para resolver o problema proposto.
// Explicação clara das condições e decisões tomadas pelo programa.

const calcMedia = (nota1, nota2) => {
	return (media = (nota1 + nota2) / 2)
}

const alunos = [
	{ nome: 'João', nota1: 10, nota2: 4 },
	{ nome: 'Maria', nota1: 7, nota2: 8 },
	{ nome: 'Fernando', nota1: 6, nota2: 9 }
]

const alunosAprovados = []
const alunosReprovados = []

for (let aluno of alunos) {
	const mediaAluno = calcMedia(aluno.nota1, aluno.nota2)

	if (mediaAluno < 7.5) {
		alunosReprovados.push(aluno.nome)
	} else {
		alunosAprovados.push(aluno.nome)
	}
}

console.log(`Parabéns aos alunos aprovados: ${alunosAprovados}
Foram reprovados os alunos: ${alunosReprovados}`)
