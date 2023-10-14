import './style.css'
import { Questions, answerQuestion, optionsQuestion } from './js/models/Question'
import { headerQuestion, cardBody, titleViewQuestion, optionsViewQuestion } from './js/models/UI'

const cardQuiz = document.querySelector('.card-quiz')
cardQuiz.appendChild(headerQuestion())
cardQuiz.appendChild(cardBody())

const cardHeader = document.querySelector('.card-header')
cardHeader.appendChild(titleViewQuestion(Questions()))

optionsViewQuestion(optionsQuestion)
// console.log(optionsQuestion.map(item => item))