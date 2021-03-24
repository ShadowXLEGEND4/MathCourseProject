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
        question: "Какво е аритметична прогресия?",
        answers: {
          a: "Числовва редица, в която всеки член след първия се получава, като предходния член добавим едно и също число",
          b: "Числовва редица, в която всеки член след първия се получава, като предходния член умножим с  едно и също число",
          c: "Числовва редица, в която всеки член след първия се получава, като предходния член разделим с едно и също число"
        },
        correctAnswer: "a"
      },
      {
        question: "Каква е формулата за намиране на първия член на прогресията?",
        answers: {
          a: "an=a1+(n-1).d",
          b: "Sn=(a1+an)/2.n",
          c: "И двете заедно"
        },
        correctAnswer: "c"
      },
      {
        question: "Научих ли нещо наистина?",
        answers: {
          a: "Даа",
          b: "Не съвсем",
          c: "Нещо, но не всичко",
          d: "Абсолютно нищо"
        },
        correctAnswer: "d"
      }
    ];

    buildQuiz();
  
    submitButton.addEventListener('click', showResults);
  })();