const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Em uma linda manhã, você vê no noticiário que encontraram a cura para o câncer com medicamentos nunca utilizados antes, mas que mostram muita eficácia nas primeiras horas. A OMS empolgada com os resultados libera o tratamento sem checar as reações adversas. Qual sua reação?", 
    alternativas: [
        {
                texto: "Ficar maravilhado(a) e procurar espalhar a notícia!", 
                afirmacao: "Ficou encantado(a) com a notícia da descoberta para a cura do câncer, sem se preocupar com sua eficácia ou efeitos colaterais."
            },
            {
                texto: "Ficar desconfiado(a) e pesquisar sobre os resultados do tratamento.",
                afirmacao: "Ficou com um pé atrás sobre a notícia relacionada a cura para o câncer, pois havia sido liberada sem as medidas necessárias de estudos para um medicamento que cura uma doença tão séria capaz de afetar todo o organismo."
            }
    ]
},

    {
        enunciado: "Assim que você sai de casa, se depara com uma multidão correndo desesperadamente e o caos se instaurando na cidade. O que você faz?", 
    alternativas: [
         {
                texto: "Corre com a multidão.", 
                afirmacao: "Entrou em desespero em meio a uma situação de risco e correu para onde todos estavam indo."
            },
            {
                texto: "Volta para casa e procura entender o que está acontecendo.",
                afirmacao: "Se manteve calmo(a) e tentou voltar para casa onde sabia que era seguro."
            }
    ]
    },

     {
        enunciado: "Enquanto você corre, percebe alguns cidadãos com comportamentos estranhos e assustadores, como ficar com os olhos brancos, aparentar estar em estado de decomposição, ser alvejado e mesmo assim continuar correndo, e pior, atacar diversas pessoas. O que você faz?", 
    alternativas: [
        {
                texto: "Continua correndo.", 
                afirmacao: "O desespero tomou conta de você e não conseguia fazer mais nada além de correr."
            },
            {
                texto: "Procura um abrigo mais próximo possível.",
                afirmacao: "Após essa situação desesperadora, entendeu que não era possível voltar para casa, portanto, tentou buscar um lugar mais próximo."
            }
    ]
    },

     {
        enunciado: "Você encontra um desses seres atacando uma pessoa. O que você faz?", 
    alternativas: [
                {
                texto:  "Tenta ajudar.", 
                afirmacao: "Naquele caos, mantendo a calma, escolheu ajudar a alguém que estava prestes a ser atacada."
            },
            {
                texto:  "Continua fugindo.",
                afirmacao: "O medo tomou conta do seu corpo, você deixa a pessoa para trás, pois seu corpo só pensa em si nesse momento."
            }
    ]
    },

     {
        enunciado: "A pessoa que você ajudou/ignorou era uma médica que sabia de tudo sobre esses seres, pois era a doutora que havia descoberto a cura para o câncer, mas que causava danos gravíssimos ao cérebro, transformando aqueles que adquiriram ao medicamento em zumbis. De acordo com sua decisão anterior, você decidiu o futuro de toda humanidade, o que você escolheu?", 
    alternativas: [
                        {
                texto:  "Salvei a médica e juntos(as) estamos em busca de uma cura.",
                afirmacao: "Por sorte, a mulher que você salvou era a médica que descobriu a cura para o câncer, e ela sabia perfeitamente onde tinha errado, assim sabia como obter a cura. No fim, vocês dois(uas) salvaram a humanidade de um apocalipse zumbi! Porém, ops, você acordou com seu alarme tocando, e percebeu que no fim tudo foi um sonho! OBS: Para de ter síndrome de protagonista."
            },
            {
                texto: "Deixei a médica.",
                afirmacao: "Você deixou a única pessoa que poderia salvar a humaniade e agora o mundo está em meio a um apocalipse zumbi. Todos aqueles que você conhece morreram e agora, em meio a esse desastre, você também virou zumbi! Porém, ops, náo se preocupe, seu alarme está tocando e você percebe que tudo foi um sonho, ainda bem!"
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
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
         atual++,
         mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um lindo dia em um apocalipse zumbi...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()