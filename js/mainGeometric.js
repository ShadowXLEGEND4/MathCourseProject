(function(){
  function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;


      if(userAnswer === currentQuestion.correctAnswer){

        numCorrect++;


        answerContainers[questionNumber].style.color = 'limegreen';
      }

      else{

        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} от ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. Какво представлява геометричната прогресия?",
      answers: {
        a: "Числовва редица, в която всеки член след първия се получава, като предходния член добавим едно и също число",
        b: "Числовва редица, в която всеки член след първия се получава, като предходния член умножим с  едно и също число",
        c: "Числовва редица, в която всеки член след първия се получава, като предходния член разделим с едно и също число"
      },
      correctAnswer: "b"
    },
    {
      question: "2. С коя буква бележим частното на геометичната прогресия?",
      answers: {
        a: "d",
        b: "S",
        c: "q"
      },
      correctAnswer: "c"
    },
    {
      question: "3. Коя геометрична прогресия е растяща?",
      answers: {
        a: "2, 4, 8, 16, 19",
        b: "10, 8, 6, 2",
        c: "10, 6, 8, 12, 15",
      },
      correctAnswer: "a"
    },
    {
      question: "4. Дадена е геометрична прогресия, като а1=3 и q=2. Намерете а5 за геометричната прогресия",
      answers: {
        a: "16",
        b: "48",
        c: "3",
      },
      correctAnswer: "b"
    },
    {
      question: "5. Намерете а1 за геометричната прогресия, ако: q=3 и S4=80",
      answers: {
        a: "2",
        b: "40",
        c: "5",
      },
      correctAnswer: "a"
    }
  ];

  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();
