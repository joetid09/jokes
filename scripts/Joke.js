import {makeJoke} from "./JokeProvider.js"

// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Joke = (jokeObject) => {
    return `<div class="jokeSetup">${jokeObject.setup}</div>`
}

export const PunchLine = (punchObject => {
    return `<div class="jokePunchline">${punchObject.punchline}</div>`
})

export const Clearing = (punchObject) => {
    return ``
}