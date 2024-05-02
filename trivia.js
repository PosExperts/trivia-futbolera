window.onload = function() {
    var container = document.createElement("div");
    container.className = "trivia-container";
    document.body.appendChild(container);
    
    function calculateContainerHeight() {
        var containerWidth = container.offsetWidth;
        var containerHeight = containerWidth * 9 / 16;
        container.style.height = containerHeight + "px";
    }
    
    calculateContainerHeight();
    
    window.addEventListener("resize", function() {
        var windowWidth = window.innerWidth;
        if (windowWidth < 320) {
            container.style.width = "320px";
        } else {
            container.style.width = "70%";
        }
        calculateContainerHeight();
    });

    var score = 0; // Variable to store the score
    var askedQuestions = []; // Array to store asked questions

    // Define an array of questions and their respective answers
    var questions = [
        {
            question: "¿Qué es un hat-trick en el fútbol?",
            answers: ["3 goles", "5 goles", "4 goles", "2 goles"],
            correctAnswerIndex: 0
        },
        {
            question: "¿Cuánto dura una prórroga en fútbol?",
            answers: ["15 minutos", "30 minutos", "25 minutos", "90 minutos"],
            correctAnswerIndex: 1
        },
        {
            question: "¿Cuánto dura la media parte en el fútbol?",
            answers: ["75 minutos", "40 minutos", "45 minutos", "30 minutos"],
            correctAnswerIndex: 2
        },
        {
            question: "¿Cuántas sustituciones son permitidas en un encuentro de fútbol?",
            answers: ["5", "3", "6", "9"],
            correctAnswerIndex: 0
        },
        {
            question: "¿En qué año se inventó el fútbol?",
            answers: ["1874", "1863", "1601", "1942"],
            correctAnswerIndex: 1
        },
        {
            question: "¿Cuándo se celebró el primer mundial de fútbol?",
            answers: ["1854", "1962", "1547", "1930"],
            correctAnswerIndex: 3
        },
        {
            question: "¿Cuál es el único equipo de fútbol español que ha ganado todos los títulos oficiales en una temporada?",
            answers: ["Real Madrid", "Barcelona", "Atlético de Madrid", "Valencia"],
            correctAnswerIndex: 1
        },
        {
            question: "¿Quién es conocido como “O Rei”?",
            answers: ["Maradona", "Pelé", "Messi", "Cristiano Ronaldo"],
            correctAnswerIndex: 1
        },
        {
            question: "¿Qué equipo ha ganado más Champions League de la historia",
            answers: ["Real Madrid", "Barcelona", "Manchester United", "Juventus"],
            correctAnswerIndex: 0
        },
        {
            question: "¿En qué año fue El Salvador por primera vez a un Mundial?",
            answers: ["1970", "1974", "1982", "1990"],
            correctAnswerIndex: 0
        },
        // Add more questions as needed
    ];

    // boton_inicio
    var boton_inicio = document.createElement("button");
    boton_inicio.className = "boton_inicio";
    boton_inicio.innerText = "INICIAR";
    boton_inicio.style.position = "fixed";
    boton_inicio.style.top = "70%";
    boton_inicio.style.left = "75%";
    boton_inicio.style.transform = "translate(-50%, -50%)";
    container.appendChild(boton_inicio);

        // boton_x
        var boton_x = document.createElement("button");
        boton_x.className = "boton_x";
        boton_x.innerText = "X";
        boton_x.style.position = "fixed";
        boton_x.style.top = "10%";
        boton_x.style.left = "6%";
        boton_x.style.transform = "translate(-50%, -50%)";
        boton_x.style.display = "none";
        container.appendChild(boton_x);

    // mascota_inicio
    var image_mascot_inicio = document.createElement("img");
    image_mascot_inicio.className = "image_mascot_inicio";
    image_mascot_inicio.src = "Imagenes/SISA_Mascota1.png";
    image_mascot_inicio.style.position = "absolute";
    image_mascot_inicio.style.bottom = "10%";
    image_mascot_inicio.style.left = "15%";
    image_mascot_inicio.style.maxWidth = "30%";
    container.appendChild(image_mascot_inicio);

    // mascota_juego
    var mascota_juego = document.createElement("img");
    mascota_juego.className = "mascota_juego";
    mascota_juego.src = "Imagenes/SISA_Mascota2.png";
    mascota_juego.style.position = "absolute";
    mascota_juego.style.bottom = "2%";
    mascota_juego.style.left = "5%";
    mascota_juego.style.maxWidth = "30%";
    mascota_juego.style.display = "none";
    container.appendChild(mascota_juego);

    // caja_preguntas
    var caja_preguntas = document.createElement("img");
    caja_preguntas.className = "  caja_preguntas";
    caja_preguntas.src = "Imagenes/caja_preguntas.png";
    caja_preguntas.style.position = "absolute";
    caja_preguntas.style.top = "8%";
    caja_preguntas.style.right = "6%";
    caja_preguntas.style.maxWidth = "69%";
    caja_preguntas.style.display = "none";
    container.appendChild(caja_preguntas);

    // logo_inicio
    var logo_inicio = document.createElement("img");
    logo_inicio.className = "logo_inicio";
    logo_inicio.src = "Imagenes/Logo_inicio.png";
    logo_inicio.style.position = "absolute";
    logo_inicio.style.top = "35%";
    logo_inicio.style.right = "5%";
    logo_inicio.style.maxWidth = "40%";
    container.appendChild(logo_inicio);

    // logo_final
    var logo_final = document.createElement("img");
    logo_final.className = "logo_final";
    logo_final.src = "Imagenes/logo_final.png";
    logo_final.style.position = "absolute";
    logo_final.style.top = "15%";
    logo_final.style.left = "50%";
    logo_final.style.maxWidth = "30%";
    logo_final.style.transform = "translateX(-50%)";
    logo_final.style.display = "none";
    container.appendChild(logo_final);

    var scoreText = document.createElement("div");
    scoreText.className = "score";
    scoreText.style.position = "absolute";
    scoreText.style.top = "60%";
    scoreText.style.left = "50%";
    scoreText.style.transform = "translate(-50%, -50%)";
    scoreText.style.display = "none";
    container.appendChild(scoreText);

    var End_Text = document.createElement("div");
    End_Text.className = "End_Text";
    End_Text.innerText = "FELICIDADES TIENES";
    End_Text.style.position = "absolute";
    End_Text.style.top = "50%";
    End_Text.style.left = "50%";
    End_Text.style.transform = "translate(-50%, -50%)";
    End_Text.style.display = "none";
    container.appendChild(End_Text);

    var resetButton = document.createElement("button");
    resetButton.className = "boton_inicio";
    resetButton.innerText = "REINICIAR!";
    resetButton.style.position = "absolute";
    resetButton.style.bottom = "15%";
    resetButton.style.left = "50%";
    resetButton.style.transform = "translateX(-50%)";
    resetButton.style.display = "none";
    container.appendChild(resetButton);

    boton_inicio.addEventListener('click', function() {
        logo_inicio.style.display = "none";
        boton_inicio.style.display = "none";
        image_mascot_inicio.style.display = "none";
        container.style.backgroundImage = "url(Imagenes/BG2.png)";
        mascota_juego.style.display = "block";
        caja_preguntas.style.display = "block";
        boton_x.style.display = "block";


        // Select a question that has not been asked yet
        var unansweredQuestions = questions.filter(function(question) {
            return askedQuestions.indexOf(question) === -1;
        });

        if (unansweredQuestions.length === 0) {
            // Show score and reset button
            scoreText.innerText = score + " PUNTOS";
            scoreText.style.display = "block";
            End_Text.style.display = "block";
            resetButton.style.display = "block";
            boton_x.style.display = "none";
            logo_final.style.display = "block";


            // Hide final elements
            container.style.backgroundImage = "url(Imagenes/BG1.png)";
            mascota_juego.style.display = "none";
            caja_preguntas.style.display = "none";

            // Remove all questions and answer buttons
            var questionElements = document.querySelectorAll(".question");
            questionElements.forEach(function(element) {
                container.removeChild(element);
            });

            var answerButtons = document.querySelectorAll(".answer-button");
            answerButtons.forEach(function(button) {
                container.removeChild(button);
            });

            // Reset asked questions and score
            askedQuestions = [];
            score = 0;
        } else {
            var randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
            var selectedQuestion = unansweredQuestions[randomIndex];
            
            // Display the selected question
            var questionElement = document.createElement("div");
            questionElement.className = "question";
            questionElement.innerText = selectedQuestion.question;
            questionElement.style.position = "absolute";
            questionElement.style.top = "25%";
            questionElement.style.left = "35%";
            questionElement.style.textAlign = "left";
            questionElement.style.whiteSpace = "normal";
            questionElement.style.maxWidth = "42%";
            questionElement.style.fontWeight = "bold";
            questionElement.style.fontSize = "20px";
            questionElement.style.color = "white";
            questionElement.style.fontFamily = "'helvetica', bold";
            questionElement.style.textShadow = "0 0 3px #003366, 0 0 3px #003366, 0 0 3px #003366, 0 0 3px #003366"; 

            container.appendChild(questionElement);

            function adjustButtonFontSize() {
                var screenWidth = window.innerWidth;
                var fontSize = Math.min(20, screenWidth * 0.02); // Adjust this multiplier for desired responsiveness
                var answerButtons = document.querySelectorAll(".answer-button");
                answerButtons.forEach(function(button) {
                    button.style.fontSize = fontSize + "px";
                });
            }

            function adjustFontSize() {
                var screenWidth = window.innerWidth;
                var fontSize = Math.min(20, screenWidth * 0.02); // Adjust this multiplier for desired responsiveness
                questionElement.style.fontSize = fontSize + "px";
            }

            adjustFontSize();
            window.addEventListener('resize', adjustFontSize);

            adjustButtonFontSize();
            window.addEventListener('resize', adjustButtonFontSize);

            // Display the answer buttons in a 2x2 grid
            var answerButtonsContainer = document.createElement("div");
            answerButtonsContainer.className = "answer-buttons-container";
            answerButtonsContainer.style.position = "absolute";
            answerButtonsContainer.style.bottom = "10%";
            answerButtonsContainer.style.left = "35%";
            answerButtonsContainer.style.width = "50%";
            answerButtonsContainer.style.display = "flex"; // Use flexbox to align buttons
            answerButtonsContainer.style.flexWrap = "wrap"; // Allow buttons to wrap to the next row
            answerButtonsContainer.style.minWidth = "250px"; // Set a minimum width to maintain the grid layout

            container.appendChild(answerButtonsContainer);

            for (var i = 0; i < selectedQuestion.answers.length; i++) {
                var answerButton = document.createElement("button");
                answerButton.className = "answer-button";
                answerButton.innerText = selectedQuestion.answers[i];
                answerButtonsContainer.appendChild(answerButton);

                // Set button styles
                answerButton.style.width = "45%"; // Adjust width as needed
                answerButton.style.height = "25%"; // Adjust height as needed
                answerButton.style.margin = "5px"; // Add margin between buttons
                answerButton.style.fontSize = "20px";



            }

            // Add event listeners to answer buttons
            var answerButtons = document.querySelectorAll(".answer-button");
            var feedbackText = document.createElement("div"); // Create a new div element for feedback text
            feedbackText.classList.add("feedback-text");

            feedbackText.style.position = "absolute";
            feedbackText.style.bottom = "5%";
            feedbackText.style.left = "50%";
            feedbackText.style.textAlign = "center";
            feedbackText.style.whiteSpace = "normal";
            feedbackText.style.maxWidth = "30%";
            feedbackText.style.fontWeight = "bold";
            feedbackText.style.fontSize = "12px";
            feedbackText.style.color = "white";
            feedbackText.style.fontFamily = "'helvetica', bold";
            feedbackText.style.textShadow = "0 0 3px #003366, 0 0 3px #003366, 0 0 3px #003366, 0 0 3px #003366"; 

            answerButtons.forEach(function(button, index) {
                button.addEventListener('click', function() {
                    // Handle button click
                    var isCorrect = index === selectedQuestion.correctAnswerIndex;

                    if (isCorrect) {
                        score += 10;
                        feedbackText.textContent = "CORRECTO +10!"; // Set feedback text to +10 if correct
                    } else {
                        feedbackText.textContent = "INCORRECTO!"; // Set feedback text to +0 if incorrect
                    }
                    container.appendChild(feedbackText);

                    setTimeout(function() {
                        container.removeChild(feedbackText); // Remove feedback text after a second
                    }, 1500);

                    // Remove question and answer buttons
                    container.removeChild(questionElement);
                    answerButtonsContainer.parentNode.removeChild(answerButtonsContainer);

                    // Add question to asked questions
                    askedQuestions.push(selectedQuestion);

                    // Start a new round
                    boton_inicio.click();
                });
            });
        }
    });

    boton_x.addEventListener('click', function() {
        location.reload(); // Reload the page
    });

    resetButton.addEventListener('click', function() {
        // Reset score and start a new round
        score = 0;
        scoreText.style.display = "none";
        End_Text.style.display = "none";
        resetButton.style.display = "none";
        boton_inicio.click();
        logo_final.style.display = "none";
    });
};
