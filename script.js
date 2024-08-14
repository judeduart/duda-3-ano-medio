const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosta de ler?",
            },
            {
                texto: "Não gosta de ler?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou procurar algum gênero que goste?",
            },
            {
                texto: "Naõ tentei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou resenhas ou vídeos sobre?",
            },
            {
                texto: "Ainda não procurei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Um bom local para procurar é o Youtube.",
            },
            {
                texto: "Não quero este local.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode procurar por prévias de livros.",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode procurar pelos Best Sellers do ano.",
            },
            {
                texto: "Não quero procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();