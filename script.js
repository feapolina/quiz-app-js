const template = document.querySelector("template");
const quiz = document.querySelector("#quiz");

const perguntas = [
  // lista de perguntas com pergunta, opcoes de resposta, e a resposta correta
  {
    pergunta: "Qual a capital da Itália?",
    respostas: ["Milão", "Roma", "Florença"],
    correta: 1,
  },
  {
    pergunta: "Qual a maior montanha da Itália?",
    respostas: ["Monte Cervino", "Monte Vesúvio", "Monte Etna"],
    correta: 0,
  },
  {
    pergunta: "Qual o rio mais longo da Itália?",
    respostas: ["Rio Tibre", "Rio Arno", "Rio Pó"],
    correta: 2,
  },
  {
    pergunta: "Qual a principal religião da Itália?",
    respostas: ["Islamismo", "Protestantismo", "Catolicismo"],
    correta: 2,
  },
  {
    pergunta: "Qual a moeda oficial da Itália?",
    respostas: ["Libra esterlina", "Dólar americano", "Euro"],
    correta: 2,
  },
  {
    pergunta: "Qual a obra de arte mais famosa da Itália?",
    respostas: ["A Última Ceia", "Davi", "Mona Lisa"],
    correta: 1,
  },
  {
    pergunta: "Qual a comida italiana mais popular?",
    respostas: ["Lasanha", "Pizza", "Spaghetti"],
    correta: 1,
  },
  {
    pergunta: "Qual o time de futebol italiano mais famoso?",
    respostas: ["Inter de Milão", "Juventus", "Milan"],
    correta: 1,
  },
  {
    pergunta: "Qual o famoso festival de cinema realizado na Itália?",
    respostas: [
      "Festival de Berlim",
      "Festival de Veneza",
      "Festival de Cannes",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual a principal ilha da Itália?",
    respostas: ["Capri", "Sicília", "Sardenha"],
    correta: 2,
  },
];

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

/* pra cada item da pergunta... */
for (const item of perguntas) {
  //
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;
  // pra cada resposta da pergunta...
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }
  quizItem.querySelector("dl dt").remove();
  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
