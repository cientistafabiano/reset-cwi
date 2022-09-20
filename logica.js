//imprimindo na tela
console.log("Hello, word!")
// declaracao de variavel e atribuicao de tipos de variaveis: string, boolean, integer and float
let nomeCompleto = "Fabiano de Azedias Almeida"
let apelido = "Tchê"
let idade = 35
let dataNascimento = "02/12/1986"
let localNascimento = "Santa Rita de Jacutinga/MG"
let altura = 1.76
let trabalhando = false
let apresentacao = "Meu nome é " + nomeCompleto + "(sou conhecido como " + apelido + ") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura + "m de altura e atualmente estou " + (trabalhando ? "empregado" : "desempregado") + "."
console.log(apresentacao)
console.log("- comparando as variaveis")
let mesmoNome = "Fabiano"
let nomeFulano = "Sergio"
let nomeBeltrano = "Fabiano"
console.log(mesmoNome == nomeBeltrano)
console.log(nomeFulano == nomeBeltrano)
console.log("- usando condicional if, else")
let maiorDeIdade = 18
let iidade = 17
if (iidade < maiorDeIdade){
    console.log(true)
}else{
    console.log(false)
}
console.log("- multiplicacao")
let valorComJuros = 1000*0.1 + 1000
console.log(valorComJuros)
console.log("- divisao / soma")
let item1 = 5
let item2 = 5
let item3 = 5
let item4 = 5
let item5 = 5
let mediaAritmetica = (item1 + item2 + item3 + item4 + item5) / 5
console.log(mediaAritmetica)
console.log("- substituicao de variavel com adicao e subtracao")
//let lucroBruto = receitaLiquida - custoProdutos
//let margemBruta = (lucroBruto / receitaLiquida) * 100
let saldo = 1000
let calcaProd = 99.90
let salario = 2500
saldo = saldo - calcaProd
saldo = saldo + salario
saldo = saldo - 0.10
saldo = saldo - saldo*0.25
saldo = saldo - saldo/2
console.log(saldo)
console.log("- condicional if, else if, else. entrada e saida ")
let peso = 80
let alTura = 1.55
let imc = peso / (alTura**2)
if  (imc < 18.5){
    console.log(imc + " magreza")
}else if(imc < 24.99){
    console.log(imc + " Normal")
}else if(imc < 29.99){
    console.log(imc + " Sobrepeso")
}else if(imc < 39.99){
    console.log(imc + " Obesidade")
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}else{
    console.log(imc + " Obesidade grave")
    console.log("É importante procurar um médico para avaliar sua saúde.")
}
//Aluno, Nota, Media
console.log("- Array")
aluno = ["Fa", "Ra", "Ma", "Ja", "Ro", "Ed", "Bill"]
notas = [[5.2,7.4], [4.8,8.2], [6.5,9.4], [3.1,2.5], [8.1,2.5], [4.1,4.5], [3.1,0.5]]

//resolução do professor
for (pos=0; pos<aluno.length; pos++){
    alunoSelecionado = pos
    nomeDoAluno = aluno[alunoSelecionado]
    notasDoAluno = notas[alunoSelecionado]

    nota1 = notasDoAluno[0]
    nota2 = notasDoAluno[1]

    media = (nota1 + nota2) / 2
    console.log("O aluno: ",nomeDoAluno)
    console.log("Nota 1: ",nota1)
    console.log("Nota 2: ",nota2)
    console.log("Media: ",media)
    //se a media for maior igual q 6 passou, menor nao passou
    if (media >= 6.0){
        console.log("O " + nomeDoAluno + " passou!")
    } else if (media >= 4.0) {
        console.log("O", nomeDoAluno, "esta em recuperação!")
    } else {
        console.log("O " + nomeDoAluno + " não passou!")
    }
        console.log("")
}
console.log("----")

//Exemplo 
var frutas, yexy, flen, i;
frutas = ["Banana", "Laranja", "Maça", "Manga"]
flen = frutas.length
text = "<ul>"
for (i=0; i<flen; i++){
    text += "<li>" + frutas[i] + "</li>"
}
text += "</ul>"
console.log(text)
console.log("----")
//conhecendo WHILE e DO WHILE
num = 1
while (num <= 10){
    console.log(num++)
    // if (num == 4){
    //     break
        
    // }
}
console.log("------------")
num=-6
do {
    console.log(num--)
}while (num >=-5)
console.log("------------")
for(num=1;num<=3;num++){
    console.log(num)
}
console.log("------------")
// cRIE UM ARRAY DE 5 POSICAO e imprima os elementos
politica = ["bolsonaro", "Felipe", "Tebet", "Ciro", "Soraya"]
for (pos=0;pos<politica.length;pos++){
    candidato = politica[pos]
    console.log(candidato)
}
console.log("------------")
// crie um algoritmo capaz de calcular a media
valores = [1,2,3,5,8,13,21,23,34,55]
pos = 0
total = 0
while (pos<valores.length){
    total += valores[pos]
    pos++
}
media = total / valores.length
console.log(media)
console.log("------------")
//faça consulta do seu nome na lista de nomes mais comuns
//se seu nome estiver la diga: nome comum, senao: diferentao, hein?
meuNome = "Felipe"
nomeComun = false
nomesComuns = ["Miguel", "Laura", "Lucas", "Bia", "Gui", "Maria", "Gabriel", "Ana", "Arthur",
                "Julia", "Felipe"]
// pos = 0
// while (pos<nomesComuns.length){
//     if (meuNome == nomesComuns[pos]){
//         nomeComun = true
//         pos++
//         break        
//     }
// }
for (pos=0;pos<nomesComuns.length;pos++){
    if (meuNome == nomesComuns[pos]){
        nomeComun = true
        break
    }
}
if (nomeComun){
    console.log("Nome comum")
} else {
    console.log("DIferentao, hein?")
}
//proxima aula 9
