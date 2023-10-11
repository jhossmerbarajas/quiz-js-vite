import './style.css'
import { viewCardQuestion } from './js/viewCardQuestions'
import { events } from './js/events'

document.querySelector('#app').innerHTML = `
  <section class="container">
    <header>
      <p id="aciertos"> Aciertos </p>
    </header>

    <section class="title-quiz">
      <h1> Quiz with JS! </h1>
    </section>
    
    <section id="cardQuestions" class="card-quiz"></section>

  </section>
`
viewCardQuestion(document.querySelector("#cardQuestions"))
events(document.querySelectorAll('.response'))