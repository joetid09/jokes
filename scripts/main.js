import {makeJoke, useJoke} from "./JokeProvider.js"
import {Joke, PunchLine} from "./Joke.js"

const jokeBtn = document.querySelector(".request-joke-btn");
const punchlineBtn = document.querySelector(".request-punch-btn");
const jokeElement = document.querySelector(".joke-setup");
const punchlineElement = document.querySelector(".joke-punchline");
const clearingElement =
jokeBtn.addEventListener("click", (e) => {
  makeJoke().then(jokeData => {

    const theJoke = useJoke()
      jokeElement.innerHTML = Joke(theJoke)
      
    punchlineBtn.addEventListener("click", () => {
      makeJoke().then(jokeData => {
        punchlineElement.innerHTML = PunchLine(theJoke)
      })
    })
  })
  
  // TODO: fetch a joke from the Joke API and render it to the DOM
})


