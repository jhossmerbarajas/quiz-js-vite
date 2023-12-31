import { newGame } from '../newGame'

export function  titleViewQuestion(question) {
	const text = document.querySelector("#question-title")
	text.innerHTML = question
}

export function optionsViewResponse (option, correctAnswer) {
	const optionsContainer = document.querySelector('#card-body')
	/* se le agrega el innerHTML para que, cuando vuelva a 
	   recorrerlo, lo "limpie" y pueda pintar las 
	   siguirentes optiones
	 */
	optionsContainer.innerHTML = "" 
	
	
	for(let i = 0; i < option.length; i++) {
		const button = document.createElement('button')
		button.innerText = option[i]
		button.addEventListener('click', () => correctAnswer(option[i]))
		optionsContainer.append(button)
	}
}

export function viewScore (score) {
	const gameOver = `
		<div class="result">
			<p> Your score: <strong>  ${score} </strong></p>
			<button class="newgame"> new game </button>
		</div>
	`
	const containerQuiz = document.getElementById('container')
	containerQuiz.innerHTML = gameOver
}