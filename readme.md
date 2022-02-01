# wordle-wordlist

> ### easy way to fetch wordle's wordlist

#### WIP!!! IF YOU FIND ANY BUGS OPEN ISSUE ON GITHUB!!!

## usage

First install the module:

```
npm i wordle-wordlist
```

Import the module

```
var wordlist = require("wordle-wordlist")
```

Access the wordlist:

- Allowed guesses(doesnt contain answers) - 
`wordlist.guesses()`
- Possible answers - `wordlist.answers()`
- All words (most used) - `wordlist.all()`

NOTE: ALL FUNCTIONS RETURN PROMISES!!!

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

# thanks
