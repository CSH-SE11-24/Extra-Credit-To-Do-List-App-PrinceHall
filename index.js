// Create an empty array called 'todoList' to store your to-do list items.

let todoList = ["Email manager", "Read a little life", "Study for AP bio", "Fill in my timesheet", "Study for bio retake "]


// You will be implementing a loop that repeatedly displays possible options, takes user input, and performs actions accordingly. 
// Print "Welcome to the To-Do List App"

console.log("Welcome to the To-DO List App")


// Print the options 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit

console.log("1 - display the list")
console.log("2 - add new task to end")
console.log("3 - add new task to beginning")
console.log("4 - delete first task")
console.log("5 - exit")

// Define a variable called userChoice and set it to 0

let userchoice = 0

// Create a while loop that runs while the user doesn't type in 5

while(userchoice != 5){
  userchoice = prompt("Type a number")
  
  if(userchoice == 1){
    console.log(todoList)
  }
  else if(userchoice == 2){
    let newitem = prompt("Give me a new item")
    todoList.push(newitem)
  }
  else if(userchoice == 3){
    let newitem = prompt("Give me a new item")
    todoList.unshift(newitem)
  }
  else if(userchoice == 4){
    todoList.shift()
  }
}

console.log(todoList)

// In the loop, use conditionals to match the action to the option 
// 1 - display the list
// 2 - add new task to end
// 3 - add new task to beginning
// 4 - delete first task
// 5 - exit









