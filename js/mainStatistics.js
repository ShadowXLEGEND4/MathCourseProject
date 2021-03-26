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
        question: "1. Кое определение се отнася за модата?",
        answers: {
          a: "Числовва редица, в която всеки член след първия се получава, като предходния член добавим едно и също число",
          b: "Сбора от значенията на всички единици от съвкупността",
          c: "Най-често срещаното число или буква в съвкупността"
        },
        correctAnswer: "c"
      },
      {
        question: "2. Какво представлява медианата?",
        answers: {
          a: "Сумата от индивидуалните значения на всички едици от съвкупността, разделена на техния брой",
          b: "Числова стойност, която разделя реда на две равни части",
          c: "Най-често срещаното значение на признака в съвкупността"
        },
        correctAnswer: "b"
      },
      {
        question: "3. Средна аритметична стойност е:",
        answers: {
          a: "Сумата от индивидуалните значения на всички едици от съвкупността, разделена на техния брой",
          b: "Числовва редица, в която всеки член след първия се получава, като предходния му член умножим едно и също число",
          c: "Числовва редица, в която всеки член след първия се получава, като предходния член добавим едно и също число",
        },
        correctAnswer: "a"
      },
      {
        question: "4. Намерете модата на ранговия ред: 3, 3, 4, 5, 5, 5, 7, 8, 8",
        answers: {
          a: "5",
          b: "3",
          c: "8"
        },
        correctAnswer: "a"
      },
      {
        question: "5. Намерете средната аритметична стойност на реда: 2, 3, 3, 3, 5, 5, 7",
        answers: {
          a: "3",
          b: "28",
          c: "4"
        },
        correctAnswer: "b"
      },
      {
        question: "6. Намерете медианата на реда: 2, 2, 3, 4, 4, 5, 5 , 7",
        answers: {
          a: "5",
          b: "3",
          c: "4"
        },
        correctAnswer: "c"
      }
    ];

    buildQuiz();
  
    submitButton.addEventListener('click', showResults);
  })();