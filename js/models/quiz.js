import { questions } from '../data/data'

let numQuestion = 0
export let score = 0;

export function quizQuestionIndex () {
	const questionIndex = questions
	
	return questionIndex[numQuestion]
}

export function quizCorrectAnswer (option) {
	if(option === quizQuestionIndex().answer) {
		score++
	}
	numQuestion++
}

export function quizFinaly() {
	return questions.length === numQuestion
}