import { questions } from './questions'

export function viewCardQuestion () {
	const cardQuestions = document.getElementById('cardQuestions')
	
	questions.forEach((question) => {
		const divCardTitle = document.createElement('div')
		divCardTitle.classList.add('card-title')

		const divCardBody = document.createElement('div')
		divCardBody.classList.add('card-body')

		const questionTitle = document.createElement('h2')
		questionTitle.classList.add('question-title')
		questionTitle.textContent = question.question

		question.options.forEach((option) => {
			const optionItem = document.createElement('button')
			optionItem.classList.add('response')
			optionItem.textContent = option
			divCardBody.appendChild(optionItem)
		})
		
		divCardTitle.appendChild(questionTitle)

		cardQuestions.appendChild(divCardTitle)
		cardQuestions.appendChild(divCardBody)
	})

	return cardQuestions
}