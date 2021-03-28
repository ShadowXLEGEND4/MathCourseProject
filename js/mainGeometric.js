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

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. kolko me myrzi da tyrsq vyprosi?",
      answers: {
        a: "Naistina mnogo",
        b: "ne me myrzi prosto nema info",
        c: "da"
      },
      correctAnswer: "c"
    },
    {
      question: "2. Koi shte vyrje troika?",
      answers: {
        a: "Az",
        b: "Ti",
        c: "Hristo"
      },
      correctAnswer: "c"
    },
    {
      question: "3. Zashto pisha tova vmesto da pratq kvot napravih na ico",
      answers: {
        a: "shtot sym typ",
        b: "nz",
        c: "3",
      },
      correctAnswer: "c"
    },
    {
      question: "4. Дадена е аритметична прогресия, като а6=17 и d=3. Намерете първия член на прогресията?",
      answers: {
        a: "5",
        b: "2",
        c: "3",
      },
      correctAnswer: "b"
    },
    {
      question: "5. Намерете броя на членовете на аритметичната прогресия, за която е дадено а1=1, d=3, S=210",
      answers: {
        a: "12",
        b: "35",
        c: "2",
      },
      correctAnswer: "b"
    }
  ];

  buildQuiz();

  submitButton.addEventListener('click', showResults);
})();
