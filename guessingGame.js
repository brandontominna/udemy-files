// first thing, ask a user to enter the maximum number

let maximum =parseInt( prompt('enter your maximum number'));
while (!maximum) {
    maximum =parseInt( prompt('enter a valid number'));
}
// using let here since it might change
// using parseInt to convert it to a number
// have to use a while loop because if you use, if, it only says enter a valid number once


// how to genreate a random number from 1- whatever maximum is

const targetNUm = Math.floor(Math.random() * maximum + 1)
console.log(targetNUm)
// this will be the number user has to guess, generates a random number in the range
// problem, when entering something that is not a number, returns Nan
// want to make sure you get a valid maximum number


// so now we have a maximum number the user enters, 
// AND generated a random number which will act as the guess 

let guess = parseInt(prompt ('Enter your first guess'));
let attempts = 1
while (parseInt(guess) !== targetNUm) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNUm) {
        guess = (prompt('TOo high, guess again'))
    } else {
        guess = (prompt ('too low, enter a new guess'))
    }
}
if (guess === 'q') {
    console.log('okay you quit')
}
    else {
        console.log(`you got it, it took you ${attempts} guesses`)

    }
// need to parse int prompt to compare number to number
// in this loop, while guess is not equal to target num, 
// if its too high, respond saying its too high, 
// then if its anything else, respond with too low
// if made it into this loop, we know they are not equal 
// need to parse into the new guesses


// now want to include attempts
// made a new variable, attempts, under guess, and 
// added + 1 to attempts everytime the while loop runs, since
// we know everytime it runs the guess was wrong
// at the end, include attempts guesses


// final addition, an option to quit early
// make an option to check if guess = q, break
// the issue is that if you make the code 
// if (guess === 'q') break;
// guess will NEVER b q, since you parse into the guesses everytime
// solution, instead of parseinting the guesses, parse int the comparison
// so while (guess !== targetNUm) now becomes
// while (parseInt(guess)!== targetNUm)