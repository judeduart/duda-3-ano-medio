const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Já sei qual quero fazer.",
            },
            {
                texto: "Não sei qual quero fazer.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou procurar alguma que te atraia?",
            },
            {
                texto: "Naõ tentei.",
            },
            {
                texto: "Já tentei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou vídeos mostrando algumas faculdades por dentro? ",
            },
            {
                texto: "Ainda não procurei.",
            },
            {
                texto: "Já procurei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já foi em alguma feira de profissões?",
            },
            {
                texto: "Nunca tentei ir.",
            }, 
            {
                texto: "Já tentei ir.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Voê tentou procurar por pessoas compartilhando suas experiências?",
            },
            {
                texto: "Não quero procurar.",
            }, 
            {
                texto: "Já tentei procurar.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Você tentou procucar cursos com as materias que você já gosta?",
            },
            {
                texto: "Não quero procurar.",
            },
            {
                texto: "Já tentei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para recomeçar.",
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