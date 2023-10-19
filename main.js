import './style.css'
import { quizQuestionIndex, quizCorrectAnswer, quizFinaly, score } from './js/models/quiz'
import {  titleViewQuestion, optionsViewResponse, viewScore } from './js/models/UI'

const renderQuiz = () => {
	if(quizFinaly()) {
		viewScore(score)
	} else {
		titleViewQuestion(quizQuestionIndex().question)
		optionsViewResponse(quizQuestionIndex().options, (capital) => { 
			quizCorrectAnswer(capital) 
			renderQuiz()
		})
	}
}

renderQuiz()