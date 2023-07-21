// Fazer um menu de exercicios utilizando exemplos dados em aula
//(6 exerciicios dentro de funçao)

import promptSync from "prompt-sync";
import { exercicio1, exercicio2, exercicio3, exercicio4, exercicio5, exercicio6  } from "./moduloExercicio1.js";
let prompt = promptSync()
let resposta

do {
    console.log("Bem vindo ao menu de excercicio!");
    resposta = prompt("Digite um numero 1 a 6 para escolher um exercicio, ou `sair` para sair:")

    switch (resposta) {
        case "1":
        
            console.log("Voce escolheu o exercicio 1")

            //chamar (invocar) o exercicio 1
            exercicio1()
             break

        case "2":
        //chamar (invocar) o execicio 2
            console.log("voce escolheu o exercicio 2")
            exercicio2()
            break

            case "3":
        //chamar (invocar) o execicio 3
            console.log("voce escolheu o exercicio 3")
            exercicio3()
            break
    
            case "4":
                //chamar (invocar) o execicio 4
                    console.log("voce escolheu o exercicio 4")
                    exercicio4()
                    break


                    case "5":
                        //chamar (invocar) o execicio 5
                            console.log("voce escolheu o exercicio 5")
                            exercicio5()
                            break


                            case "6":
                                //chamar (invocar) o execicio 6
                                    console.log("voce escolheu o exercicio 6")
                                    exercicio6()
                                    break

        default:
            console.log("voce nao escolheu nenhum exercicio")
            break;
    }



} while (resposta !="sair")