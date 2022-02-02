# wordle-wordlist

 easy way to fetch wordle's wordlist

![npm](https://img.shields.io/npm/dt/wordle-wordlist.png)

## usage

First install the module:

```
npm i wordle-wordlist
```

Import the module

```
var wordlist = require("wordle-wordlist")
```

Access the latest wordlist:

- Allowed guesses(doesnt contain answers) - 
`wordlist.guesses()`
- Possible answers - `wordlist.answers()`
- All words (most used) - `wordlist.all()`

NOTE: ALL FUNCTIONS RETURN PROMISES!!!

MAKE SURE TO USE A PROMISE OR `await`

EXAMPLE USAGE:

```
var wordlist = require("wordle-wordlist")

var allowedGuesses;
wordlist.guesses().then((words) => {
  allowedGuesses = words;
}).catch((e) => {
  console.log(e)
})

console.log(allowedGuesses) //array of words in alphabetical order
```

Example with async/await
```
var wordlist = require("wordle-wordlist")

async function go() {
var allowedGuesses = await wordlist.guesses()

console.log(allowedGuesses) //array of words in alphabetical order
}
```


# hate promises or async functions?

well don't worry, you can use the cache wordlist. 

I will try to keep it up to date, but no guarantees.

### access cached wordlist:

```
var wordlist = require("wordle-wordlist")

var guessesOnly = wordlist.cache.guesses
var answersOnly = wordlist.cache.answers
var allWords = wordlist.cache.all
```