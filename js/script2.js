const quizData = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Marsella", "París", "Nantes", "Lyon"],
        correct: "París",
        image: "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
    },
    {
        question: "¿Cuál es la capital de España?",
        options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correct: "Madrid",
        image: "https://media.cntraveler.com/photos/636529b1d36379b0d80f679d/16:9/w_1280,c_limit/Madrid_GettyImages-1175211342.jpg"
    },
    {
        question: "¿Cuál es la capital de Alemania?",
        options: ["Múnich", "Dortmund", "Berlín", "Augsburgo"],
        correct: "Berlín",
        image: "https://www.telegraph.co.uk/content/dam/Travel/hotels/2023/july/Berlin%20Brandenburg%20gate%20getty.jpg"
    },
    {
        question: "¿Cuál es la capital de Reino Unido?",
        options: ["Mánchester", "Liverpool", "york", "Londres"],
        correct: "Londres",
        image: "https://www.universal-assistance.com/uablog/wp-content/uploads/2022/12/big-ben.png"
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Roma", "París", "Atenas", "Lisboa"],
        correct: "Roma",
        image: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg"
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Pekín", "Seúl", "Tokio", "Bangkok"],
        correct: "Tokio",
        image: "https://media.admagazine.com/photos/618a5ef1a8ad6c5249a74d1d/4:3/w_2000,h_1500,c_limit/91683.jpg"
    },
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: "Ottawa",
        image: "https://content.r9cdn.net/rimg/dimg/66/6f/19cfcc07-city-9618-17782c76769.jpg?width=1366&height=768&xhint=2388&yhint=1183&crop=true"
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        correct: "Canberra",
        image: "https://businessevents.australia.com/content/dam/digital/australia-com/images/canberra-city-guide-canberra-act.jpg"
    },
    {
        question: "¿Cuál es la capital de Brasil?",
        options: ["São Paulo", "Brasilia", "Río de Janeiro", "Salvador"],
        correct: "Brasilia",
        image: "https://www.cepal.org/sites/default/files/styles/1920x1080/public/regionaloffice/images/brasilia.jpg?itok=WSt395z7"
    },
    {
        question: "¿Cuál es la capital de Rusia?",
        options: ["San Petersburgo", "Moscú", "Kiev", "Varsovia"],
        correct: "Moscú",
        image: "https://www.civitatis.com/blog/wp-content/uploads/2019/09/invierno-moscu.jpg"
    },
    {
        question: "¿Cuál es la capital de Perú?",
        options: ["Arequipa", "Lima", "Trujillo", "Cusco"],
        correct: "Lima",
        image: "https://www.tours-machupicchu-peru.com/wp-content/uploads/2021/11/Lima-Capital-Peru.jpg"
    }
];

let currentQuestionIndex = 0;
let preguntasRealizadas = []
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const timerElement = document.getElementById('timer');
const questionImageElement = document.getElementById('question-image');
const correctSound = new Audio('../src/audio/correct.mp3');
const incorrectSound = new Audio('../src/audio/incorrect.mp3');
const backgroundSound = new Audio('../src/audio/background.mp3');
backgroundSound.volume = 0.6;

const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const scoreElement = document.getElementById('score');
let cantidadPreguntas = 5
let countdown;

function loadQuestion() {
    let ObtenerPregunta = true;
    let numeroAleatorio = 0;

    while (ObtenerPregunta) {
        const existePregunta = preguntasRealizadas.includes(numeroAleatorio)
        console.log(existePregunta)
        if (existePregunta) {
            numeroAleatorio = Math.floor(Math.random() * quizData.length) + 1;
        } else {
            currentQuestionIndex = numeroAleatorio;
            preguntasRealizadas.push(currentQuestionIndex)
            ObtenerPregunta = false;
        }
    }

    timer()


    const currentQuestion = quizData[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    questionImageElement.src = currentQuestion.image;
    questionImageElement.alt = "Imagen de " + currentQuestion.correct;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectOption(option, optionElement));
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(selectedOption, selectedElement) {
    const currentQuestion = quizData[currentQuestionIndex];

    const correctOptionElement = [...optionsElement.children].find(child => child.textContent === currentQuestion.correct);
    console.log(correctOptionElement)
    if (selectedOption === currentQuestion.correct) {
        score++;
        selectedElement.classList.add('correct');
        correctSound.volume = 1;
        correctSound.play();
    } else {
        selectedElement.classList.add('incorrect');
        incorrectSound.volume = 1;
        incorrectSound.play();
    }

    optionsElement.querySelectorAll('.option').forEach(option => {
        if (option.textContent !== currentQuestion.correct) {
            option.classList.add('incorrect');
        }
    });

    correctOptionElement.classList.add('correct');

    nextButton.style.display = 'block';

    stopTimer()
}

function showResults() {
    timerElement.style.display = "none"
    questionElement.textContent = "¡Felicitaciones has terminado!";
    questionImageElement.style.display = 'none';
    optionsElement.innerHTML = '';
    resultMessage.textContent = "Tu puntuación es " + score + " de " + cantidadPreguntas;
    resultContainer.style.display = 'block';
    nextButton.style.display = "none"
}

function timer() {
    let timeLeft = 10;
            const timerElement = document.getElementById('timer');
            timerElement.textContent = timeLeft;
            timerElement.style.color = "#000000"; // Reset color

            if (countdown) {
                clearInterval(countdown);
            }

            countdown = setInterval(() => {
                timeLeft--;
                timerElement.textContent = timeLeft;
                if (timeLeft <= 5) {
                    timerElement.style.color = "#FF0000";
                }
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    // llamar aquí
                }
            }, timeLeft*100);
}

function stopTimer() {
    if (countdown) {
        clearInterval(countdown);
    }
}

nextButton.addEventListener('click', () => {

    if (preguntasRealizadas.length <= cantidadPreguntas - 1) {
        //currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
});


backgroundSound.play();

loadQuestion();