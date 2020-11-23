import Stack from "./Stack";

// Create a new that holds string
let stack = new Stack<string>();

// Insert new item into the stack
stack.push("First");
stack.push("Second");
stack.push("Third");

// Check the size of the stack
console.log(stack.size()); // 3

// Peek the last item in the stack
console.log(stack.peek()); // Third

// Remove the last item from the stack
let x = stack.pop();
console.log(x); // Third
console.log(stack.size()); // 2
