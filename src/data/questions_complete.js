const data = [
  // {
  //   category: "HTML",
  //   questions: [
  //     {
  //       question: "Qual tag cria um parágrafo?",
  //       options: ["<p>", "<h1>", "<text>", "<ul>"],
  //       answer: "<p>",
  //       tip: "É uma tag de uma letra apenas",
  //     },
  //     {
  //       question: "Qual atributo adiciona um link para a tag a?",
  //       options: ["alt", "href", "src", "link"],
  //       answer: "href",
  //       tip: "Hyperlink Reference",
  //     },
  //     {
  //       question: "As listas não ordenadas tem a tag de:",
  //       options: ["<ol>", "<ul>", "<li>", "<list>"],
  //       answer: "<ul>",
  //     },
  //     {
  //       question: "Qual atributo deixa o input obrigatório?",
  //       options: ["placeholder", "value", "required", "maxlength"],
  //       answer: "required",
  //     },
  //     {
  //       question: "A tag semântica indicada para rodapés é a:",
  //       options: ["div", "main", "section", "footer"],
  //       answer: "footer",
  //     },
  //   ],
  // },
  // {
  //   category: "CSS",
  //   questions: [
  //     {
  //       question: "Qual regra altera a cor de um elemento?",
  //       options: ["color", "background-color", "font-size", "transition"],
  //       answer: "color",
  //       tip: "Cor em inglês",
  //     },
  //     {
  //       question: "Para aumentar a fonte de um elemento utilizamos:",
  //       options: ["font", "text-transform", "font-size", "hover"],
  //       answer: "font-size",
  //     },
  //     {
  //       question: "A posição que deixa um elemento fixo é a:",
  //       options: ["static", "absolute", "fixed", "relative"],
  //       answer: "fixed",
  //     },
  //   ],
  // },
  // {
  //   category: "JavaScript",
  //   questions: [
  //     {
  //       question: "O que é Vanilla JavaScript?",
  //       options: [
  //         "JavaScript puro",
  //         "Uma biblioteca JavaScript",
  //         "Um framework JavaScript",
  //         "Um compilador de JavaScript",
  //       ],
  //       answer: "JavaScript puro",
  //     },
  //     {
  //       question: "Com qual instrução declaramos uma constante em JavaScript?",
  //       options: ["const", "let", "var", "define"],
  //       answer: "const",
  //     },
  //     {
  //       question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
  //       options: ["string", "number", "boolean", "float"],
  //       answer: "float",
  //     },
  //     {
  //       question: "Qual dos métodos a seguir seleciona um elemento?",
  //       options: ["querySelector", "parseInt", "sort", "reduce"],
  //       answer: "querySelector",
  //     },
  //     {
  //       question:
  //         "Qual destas propriedades da a quantidade de elementos de um array?",
  //       options: ["qty", "length", "items", "index"],
  //       answer: "length",
  //     },
  //   ],
  // },
  {
    category: "Tobi",
    questions: [
      {
        question: "Tobi quando está com medo, sente-se:",
        options: ["Amedrontado", "Aflito", "Apavorado", "Acuado"],
        answer: "Acuado",
        tip: "Sem dica, muito fácil...",
      },
      {
        question: "Tobi quando está feliz fica:",
        options: ["Faceiro", "Acuado", "Serelepe", "Inquieto"],
        answer: "Serelepe",
        tip: "Outra fácil...",
      },
      {
        question: "Tobi antes de dormir fica:",
        options: ["Sonolento", "Inquieto", "Impaciente", "Ansioso"],
        answer: "Inquieto",
      },
      {
        question: "O que o Tobi diz quando acorda com barulho na madrugada?",
        options: [
          "O que houve?",
          "Que barulho é esse?",
          "Pé da cabra",
          "Ele não diz nada",
        ],
        answer: "Pé da cabra",
      },
      {
        question: "Tobi toma qual remedinho pra dormir?",
        options: ["Frontal", "Rivotril", "Zolpidem", "Lexotan"],
        answer: "Zolpidem",
      },
    ],
  },
  {
    category: "Português",
    questions: [
      {
        question: "A palavra 'latifúndio' está relacionada com:",
        options: [
          "Abrigo de cães",
          "Grande área rural",
          "Produção de leite",
          "Geografia",
        ],
        answer: "Grande área rural",
        tip: "Sem dica, muito fácil...",
      },
      {
        question: "Ufanista é aquele que...",
        options: [
          "Estuda os extraterrestres",
          "Cria unicórnios",
          "Idolatra seu país",
          "Viajante",
        ],
        answer: "Idolatra seu país",
        tip: "Outra fácil...",
      },
      {
        question: "Sorrateiro é o mesmo que...",
        options: ["Sonolento", "Inquieto", "Dissimulado", "Ansioso"],
        answer: "Dissimulado",
      },
      {
        question: "O que é incipiente?",
        options: [
          "Algo que está no começo",
          "Um tipo de recipiente",
          "Um barril",
          "Um poço",
        ],
        answer: "Algo que está no começo",
      },
      {
        question: "Qual palavra apresenta grafia certa?",
        options: ["Cardaço", "Pertubar", "Cabeleileiro", "Recauchutar"],
        answer: "Recauchutar",
      },
    ],
  },
  {
    category: "Direito",
    questions: [
      {
        question:
          "Subtrair coisa móvel alheia, para si ou para outrem, mediante grave ameaça ou violência a pessoa...",
        options: ["Art. 155", "Art. 157", "Art. 159", "Art. 158"],
        answer: "Art. 157",
        tip: "Sem dica, muito fácil...",
      },
      {
        question: "Abigeato é o crime de...",
        options: [
          "Furto de animais",
          "Matar animais",
          "Sequestrar animais",
          "Comer animais",
        ],
        answer: "Furto de animais",
        tip: "Outra fácil...",
      },
      {
        question: "Qual é a pena para crimes hediondos?",
        options: ["Um ano", "Um a dois", "Três a seis", "Quatro"],
        answer: "Três a seis",
      },
      {
        question: "Qual o artigo para tráfico de drogas?",
        options: ["Art. 32", "Art. 33", "Art. 34", "Art. 35"],
        answer: "Art. 33",
      },
      {
        question: "O que é crime culposo?",
        options: [
          "Crime praticado com sentimento de culpa",
          "Teve a culpa sem intenção",
          "A vítima foi culpada",
          "Um crime onde outra pessoa foi culpada",
        ],
        answer: "Teve a culpa sem intenção",
      },
    ],
  },
];

export default data;
