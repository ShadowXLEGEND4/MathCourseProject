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
        question: "1. Да се намерят стойностите на тригонометричните функции на ъгъл α, ако α=120 градуса",
        answers: {
          a: "sin α=√2/2, cos α=-√2/2, tg α=-1, cotg α=-1",
          b: "sin α=√3/2, cos α=-1/2, tg α=-√3, cotg α=-√3/3",
          c: "sin α=1/2, cos α=-√3, tg α=-1, cotg α=√3"
        },
        correctAnswer: "b"
      },
      {
        question: "2. Пресметнете стойността на израза: А=2cos 120 + 3tg 150",
        answers: {
          a: "1+√3",
          b: "-√2",
          c: "-1-√3"
        },
        correctAnswer: "c"
      },
      {
        question: "3. Пресметнете стойността на израза: А=-1/cos α, при α=45",
        answers: {
          a: "-√2",
          b: "2",
          c: "2√3/3",
        },
        correctAnswer: "a"
      },
      {
        question: "4. Намерете tg α, ако α=150",
        answers: {
          a: "-√3",
          b: "-√3/3",
          c: "-√2",
        },
        correctAnswer: "b"
      },
      {
        question: "5. Да се намери cos α, като α=135",
        answers: {
          a: "-1",
          b: "-√3",
          c: "-√2/2",
        },
        correctAnswer: "c"
      }
    ];

    buildQuiz();
  
    submitButton.addEventListener('click', showResults);
  })();