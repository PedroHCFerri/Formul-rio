const perguntas = [
    {
      pergunta: "O que é um algoritmo?",
      respostas: [
        "Uma linguagem de programação",
        "Uma sequência de passos para resolver um problema",
        "Um tipo de variável em JavaScript",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Comparação de valores apenas",
        "tribuição de valores",
      ],
      correta: 2,
    },
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Document Offset Method",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a estrutura de controle utilizada para repetições em JavaScript?",
      respostas: [
        "if-else",
        "switch",
        "for",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Uma classe",
        "Um objeto",
        "Um bloco de código reutilizável",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é o operador utilizado para concatenar strings em JavaScript?",
      respostas: [
        " +",
        " -",
        " *",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é o tipo de dado retornado pelo método 'parseInt()' em JavaScript?",
      respostas: [
        "String",
        "Number",
        "Boolean",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um loop 'while'?",
      respostas: [
        "Um loop de repetição infinito",
        "Um loop que executa seu bloco de código pelo menos uma vez",
        "Um loop que verifica uma condição no final",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "OR lógico",
        "AND lógico",
        "NOT lógico",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado que representa uma coleção ordenada de elementos",
        "Um tipo de loop",
        "Um tipo de variável global",
      ],
      correta: 0,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const tamplate = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
   for(const item of perguntas){
      const quizItem= tamplate.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
      for(let resposta of item.respostas){
                const dt = quizItem.querySelector('dl dt').cloneNode(true)
                dt.querySelector('span').textContent = resposta
                dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
                dt.querySelector('input').value= item.respostas.indexOf(resposta)
                dt.querySelector('input').onchange= (event) => {
                    const estaCorreta= event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta){
              corretas.add(item)
            }
  
             mostrarTotal.textContent= corretas.size + ' de ' + totalDePerguntas
           
          }
  
  
          quizItem.querySelector('dl').appendChild(dt)
      }
    
      quizItem.querySelector('dl dt').remove()
  
      quiz.appendChild(quizItem)
   }
  
  
  
  
  
  
  
  