import leia from 'readline-sync';

var estudantes = [];

for (var i = 0; i < 3; i++) {
    var nome = leia.question("DIGITE O NOME DO ESTUDANTE: ");
    var nota = leia.questionFloat("DIGITE A NOTA: ");

    while (nota  < 0 || nota > 10) {
        console.log("NOTA INVALIDA!");
        nota = leia.questionFloat("DIGITE A NOTA NOVAMENTE: ");    
    }
    
    estudantes.push({
        nome: nome,
        nota: nota
    });
}

var maior7 = 0;
var menor7 = 0;

console.log ("\n============== ALUNOS ==============");

for (var estudante of estudantes) {
    console.log(estudante.nome + " NOTA: " + estudante.nota);

    if (estudante.nota >= 7) {
        maior7++;
    } else {
        menor7++;
    }
}
console.log ("\n============== NOTAS ==============");
console.log("NOTAS MAIORES OU IGUAIS A 7: " + maior7);
console.log("NOTAS MENORES QUE 7: " + menor7);
