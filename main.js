import './style.css'
import { quizQuestionIndex, quizCorrectAnswer, quizFinaly, score } from './js/models/quiz'
import {  titleViewQuestion, optionsViewResponse, viewScore } from './js/models/UI'

import { newGame } from './js/newGame'

const renderQuiz = () => {
	if(quizFinaly()) {
		viewScore(score)
		newGame(document.querySelector(".newgame"))
	} else {
		titleViewQuestion(quizQuestionIndex().question)
		optionsViewResponse(quizQuestionIndex().options, (capital) => { 
			quizCorrectAnswer(capital) 
			renderQuiz()
		})
	}
}

renderQuiz()

