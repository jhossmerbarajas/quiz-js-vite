import './style.css'
import { viewCardQuestion } from './js/models/UI'
import { questionIndex } from './js/models/quiz'
import { events } from './js/events'

document.querySelector('#container', viewCardQuestion())
events(document.querySelectorAll('.response'))

console.log(questionIndex())