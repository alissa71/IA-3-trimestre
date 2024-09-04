const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Quais artistas fizeram parte da música no período da Ditadura militar",
    alternativas: [
    {
 texto:"Caetano Veloso,Gilberto Gil e Raul Seixas",
 afirmacao:"Artistas que trouxeram o tema de liberdade na época"
    },
{
texto:"Gustavo Lima,Marília Mendonça,MC Paiva",
afirmacao:"Artistas que trouxeram modernidade para sua época"
},
    ]
    },
   {
    enunciado: "Quais emoções podem ser consideradas boas",
    alternativas: [
        {
texto: "Relaxamento",
afirmacao: "Traz conforto ao ouvir"
        },
{
texto: "Tristeza",
afirmacao: "Traz desconforto ao ouvir"
}
] 
    },
    {
        enunciado: "Quais gêneros musicais são brasileiros",
        alternativas: [
        {
        texto:"Samba, pagode e forró",
        afirmacao: "Tem origem no Brasil"
            },
 {
        texto:"Jazz, Hip Hop e Rock" ,
        afirmacao: "Trazidas de outras culturas"
    }
    ]
        },
]
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
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();