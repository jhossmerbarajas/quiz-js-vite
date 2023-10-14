import { data } from '../data/data'

export const Questions = () => {
	const questions = data.map(item => item.question)
	return questions
}

export const answerQuestion = () => {
	return data.map(item => item.answer)
}

export const optionsQuestion = data.map(item => item.options)
