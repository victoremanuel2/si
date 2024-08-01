const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "?tu eres una grasa?",
        alternativas: [
            {
                texto: "sí!",
                afirmacao: "tem que fazer exercício "
            },
            {
                texto: "no!",
                afirmacao: "que bueno"
            }
        ]
    },
    {
        enunciado: "?comes mucha grasa?",
        alternativas: [
            {
                texto: "no",
                afirmacao: "que bueno."
            },
            {
                texto: "si",
                afirmacao: "así que deja de"
            }
        ]
    },
    {
        enunciado: "¿Hacer ejercicio?",
        alternativas: [
            {
                texto: "si",
                afirmacao: "que bueno."
            },
            {
                texto: "no",
                afirmacao: "necesitas empezar."
            }
        ]
    },
    {
        enunciado: "sabe falar espanhol?",
        alternativas: [
            {
                texto: "si",
                afirmacao: "que legal isso é muito bom"
            },
            {
                texto: "no",
                afirmacao: "aprenda pois é uma lingua muito legal"
            }
        ]
    },
    {
        enunciado: "tem namorado",
        alternativas: [
            {
                texto: "no",
                afirmacao: "as vezes é bom ficar sozinho"
            },
            {
                texto: "si",
                afirmacao: "que bom cuida bem dele ou dela "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();