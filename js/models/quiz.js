import { data } from '../data/data'

let numQuestion = 0

export function questionIndex () {
	const questionIndex = data.map(items => items)
	
	return questionIndex[numQuestion]
}

export function validatedResponse (capital) {
	if(questionIndex().answer === capital) {
		console.log('cor')
	} else {
		console.log('er')
	}
	numQuestion++
		const nextQuestion = questionIndex()
		console.log(nextQuestion.question)
}