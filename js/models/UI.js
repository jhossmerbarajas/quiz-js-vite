import { data } from '../data/data'

export function viewCardQuestion () {
	const container = document.getElementById('container')

	
	data.forEach((question) => {
		const cardQuestions = document.createElement('section')
		cardQuestions.classList.add('card-quiz')

		const divCardTitle = document.createElement('div')
		divCardTitle.classList.add('card-header')

		const questionTitle = document.createElement('h2')
		questionTitle.classList.add('question-title')
		questionTitle.textContent = question.question


		const divCardBody = document.createElement('div')
		divCardBody.classList.add('card-body')

		question.options.forEach((option) => {
			const optionItem = document.createElement('button')
			optionItem.classList.add('response')
			optionItem.textContent = option
			divCardBody.appendChild(optionItem)
		})
		
		divCardTitle.appendChild(questionTitle)

		cardQuestions.appendChild(divCardTitle)
		cardQuestions.appendChild(divCardBody)

		container.appendChild(cardQuestions)
	})

	return container
}