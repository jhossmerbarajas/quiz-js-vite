export function headerQuestion () {
	const headerQuestion = document.createElement('div')
	headerQuestion.classList.add('card-header')
	
	return headerQuestion
}

export function titleViewQuestion(question) {
	const titleQuestion = document.createElement('h1')
	titleQuestion.innerHTML = question
	titleQuestion.classList.add('question-title')

	return titleQuestion
}

export function cardBody () {
	const cardBody = document.createElement('div')
	cardBody.classList.add('card-body')

	return cardBody
}

export function optionsViewQuestion(options) {
  const cardBodyContainer = document.querySelector('.card-body')
  cardBodyContainer.textContent = ""

  options.forEach((option) => {
  		option.forEach((item, i) => {
  			const button = document.createElement('button')
  			button.textContent = item
  			cardBodyContainer.append(button)
  		})
  });
}