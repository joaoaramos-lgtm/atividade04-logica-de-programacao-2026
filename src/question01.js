import leia from 'readline-sync';

var venda1 = leia.questionFloat("DIGITE O VALOR DA PRIMEIRA VENDA: ");
var venda2 = leia.questionFloat("DIGITE O VALOR DA SEGUNDA VENDA: ");
var venda3 = leia.questionFloat("DIGITE O VALOR DA TERCEIRA VENDA: ");
var venda4 = leia.questionFloat("DIGITE O VALOR DA QUARTA VENDA: ");
var venda5 = leia.questionFloat("DIGITE O VALOR DA QUINTA VENDA: ");

var vendas = [ venda1, venda2, venda3, venda4, venda5 ];

var total = venda1 + venda2 + venda3 + venda4 + venda5;

var media = (venda1 + venda2 + venda3 + venda4 + venda5) / 5;


console.log("=============== OS VALORES DAS SUAS VENDAS ===============")
console.log(vendas)
console.log("=============== TOTAL FATURADO BRUTO ===============")
console.log("O VALOR TOTAL E " + total + "!")
console.log("=============== SEU TICKET MEDIO ===============")
console.log("O SEU TICKET MEDIO (MEDIA) E " + media + "!")
console.log("=============== A MAIOR VENDA ===============")

if ( venda1 > venda2 && venda1 > venda3 && venda1 > venda4 && venda1 > venda5 ) {
    console.log("SUA PRIMEIRA VENDA E A MAIOR!");
} else if ( venda2 > venda1 && venda2 > venda3 && venda2 > venda4 && venda2 > venda5 ) {
    console.log("SUA SEGUNDA VENDA E A MAIOR")
} else if ( venda3 > venda1 && venda3 > venda2 && venda3 > venda4 && venda3 > venda5 ) {
    console.log("SUA TERCEIRA VENDA E A MAIOR")
} else if ( venda4 > venda1 && venda4 > venda2 && venda4 > venda3 && venda4 > venda5 ) {
    console.log("SUA QUARTA VENDA E A MAIOR")
} else if ( venda5 > venda1 && venda5 > venda2 && venda5 > venda3 && venda5 > venda4) {
    console.log("SUA QUINTA VENDA E A SUA MAIOR VENDA!")
}