import Queue from "./Queue";

// Create a new queue that holds string
let queue = new Queue<string>();

// Insert new item into the queue
queue.enqueue("First");
queue.enqueue("Second");
queue.enqueue("Third");

// Check the size of the stack
console.log(queue.length()); // 3

// Peek the first item in the queue
console.log(queue.peek()); // First

// Remove the first item from the queue
let x = queue.dequeue();
console.log(x); // First
console.log(queue.length()); // 2
