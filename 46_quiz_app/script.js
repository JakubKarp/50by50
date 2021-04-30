const quizData = [
  {
    question: 1,
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    correct: 'a'
  },
  {
    question: 2,
    a: 'e',
    b: 'f',
    c: 'g',
    d: 'h',
    correct: 'b'
  },
  {
    question: 3,
    a: 'i',
    b: 'j',
    c: 'k',
    d: 'l',
    correct: 'c'
  }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
  answerEls.forEach(el => el.checked = false)
}

function getSelected() {
  let answer
   answerEls.forEach(el => {
     if (el.checked) {
       answer = el.id
     }
   })
   return answer
} 

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
        <button onclick="location.reload()">Reload</button>
      `
    }
  }
})