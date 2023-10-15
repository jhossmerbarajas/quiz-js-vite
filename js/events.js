import { validatedResponse } from './models/quiz'

export function events (buttons) {
	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const ev = e.target.textContent
			const a = validatedResponse(ev)
			// console.log(a)
		})
	})
}