import { validatedResponse } from './validatedResponse'

export function events (buttons) {
	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const ev = e.target.textContent
			console.log(validatedResponse(ev))
		})
	})
}