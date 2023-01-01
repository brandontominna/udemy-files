// GOAL - COMMAND LINE BASED TODOLIST
// features 
// "new" - adds a todo
// "list" - list all the todo's
// "delete" remove specific todo
// "quit" - quit the app
// everything will be done via prompt

// starting with gameloop/loop that keeps asking the prompt 
// if quit, then stops asking

let input = prompt('what would you like to do')
const todos = ['collect chicken eggs', 'clean litter box']

while(input !== 'quit' && input !=='q') {    
    if(input === 'list') {
        console.log('**********')
        for (let i=0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********')
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index  = parseInt(prompt('Okay enter index to delete:'))
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`okay, deleted ${deleted[0]}`)
        } else {
        console.log('unknown index')
    }
  }  input = prompt("What would you like to do")
}
console.log("okay you quit the app")



// using let here since variable will be updated later on - LINE 12 
// if the loop stops, then says you quit the app - 
// while input is not equal to quit, it will keep running  LINE 15 
// basically the entire thing is one big while loop, as long as the input does not equal quit and Q, else, the other commands like new, list, delete, etc


// next to list the todo's variable 
// inside the loop, check, what if the input === 'list' 
// so if it is equal, regonize it with printing some stars
// next include a for loop that prints out the index, and todolist item, to do this, using a string template literal, with i (array index), and todos[i] for the array element
// so for this for loop, starts at 0, runs as long as I is less than the todolist length, adds 1 each time
// prints out index number: todolist item


// after the for loop, add an else if conditional, if the user types new, prompt them what they would like to add
// this variable will be const since it wont change 
// following that, add their response to the array, with the push method


// final addition, add delete, else if conditional , first if input is delete, then prompt which index to delete
// next use splice method, remember the splice method needs specific starting index, number of items to delete, and ending index 
// in this case, we are splicing the todo variable, with the input from index and only deleting 1 item


// if user enters something invalid, for example asking for index, but user enters a string
// just defaults to 0 number if you enter a string

// add extra step, turn the index into a number each time with parseInt
// if user enters NaN, added if statement to show,
// NUmber.isNaN(variable) checks if a number is NaN, if it is returns true
// so added conditional to check if NOT (number.isNan(variable)) 
// run nromally
// else, say unknown index

// LINE 30
// So the reason you console.log deleted[0] here is because deleted is the variable assigned to the spliced array, it is put into its own array, and since its only 1 item, you call the 0 index since its the first (and only)
