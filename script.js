// QUESTÃO 1
// const todos_numeros = []
// const pares = []
// const impares = []

// for(let i = 1; i <= 20; i++){
//     const numeros_dig = Number(prompt("Digite um número:"))
    // todos_numeros.push(numeros_dig)

//     if (numeros_dig % 2 === 0) {
//         pares.push(numeros_dig)
//     }
//     else {
//         impares.push(numeros_dig)
//     }

// }

// console.log(`Os números digitados foram: ${todos_numeros}`);
// console.log(`Os números pares digitados foram: ${pares}`);
// console.log(`Os números ímpares digitados foram: ${impares}`);

// QUESTÃO 2

// const todos_numeros = []

// for(let i = 1; i <= 5; i++){
//     const numeros_dig = Number(prompt("Digite um número:"))
//     todos_numeros.push(numeros_dig)
// }

// console.log(`Os números digitados foram: ${todos_numeros}`);


// QUESTÃO 3

// const questions = ["Telefonou para a vítima?", "Esteve no local do crime?", "Mora perto da vítima?","Devia para a vítima?", "Já trabalhou com a vitima?"]

// let contador = 0

// for(pergunta of questions){
//     while (true) {
//         const resposta = Number(prompt(`${pergunta} \n1-Sim \n2-Não`))

//         if (resposta === 1 || resposta === 2) {
//             if(resposta === 1){
//                 contador++;
//             }
//             break
//         } else{
//             alert("Opção Inválida")
//         }
//     } 
// }

// if(contador === 2){
//     alert("Suspeito")
// }
// else if(contador >= 3 && contador <= 4){
//     alert("Cúmplice")
// }
// else if(contador === 5){
//     alert("Assassino")
// }else{
//     alert("Inocente")
// }