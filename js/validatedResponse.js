import { questions } from './questions'

export function validatedResponse (capital) {
	const res = questions.find(item => item.response === capital)
	if(!res) return 'incorrecto'

	return res.response

	// if(res) {
	// 	return res.response
	// } else {
	// 	console.log('error')
	// }
}