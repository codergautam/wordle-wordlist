var fetchit = require("./fetchit")

var cacheGuesses = require("./cache/guesses")
var cacheAnswers = require("./cache/answers")

module.exports = {
  guesses: async () => {
    return await fetchit("https://gist.githubusercontent.com/cfreshman/cdcdf777450c5b5301e439061d29694c/raw/de1df631b45492e0974f7affe266ec36fed736eb/wordle-allowed-guesses.txt")
  }, 
  answers: async () => {
    return await fetchit("https://gist.githubusercontent.com/cfreshman/a03ef2cba789d8cf00c08f767e0fad7b/raw/5d752e5f0702da315298a6bb5a771586d6ff445c/wordle-answers-alphabetical.txt")
  },

  all: async ( ) => {
    return [...await module.exports.guesses(), ...await module.exports.answers()].sort()
  },

  cache: {
    guesses: cacheGuesses.guesses,
    answers: cacheAnswers.answers,
    all: [...cacheGuesses.guesses, ... cacheAnswers.answers].sort()

    
  }
}