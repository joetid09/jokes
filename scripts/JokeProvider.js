let joke = ""
let programmingJoke = ""
// 1. define and export a useJoke function that simply returns the joke object.
//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)

export const makeJoke = () => {
    return fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => response.json())
    .then((responseData) => {
        joke = responseData
    })
}

export const makeProgrammingJoke = () => {
    return fetch ("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(response => response.json())
    .then((responseData) => {
        progammingJoke = responseData
    })
}
console.log(joke)

export const useJoke = () => {
    return joke
   
}

export const useProgrammingJoke = () => {
    return programmingJoke
}
// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response