import LinkedList from "./LinkedList";

// Create a new LinkedList that holds number
let list = new LinkedList<number>();

// Insert new item into the list
list.push(10);
list.push(20);
list.push(30);

// Check the length of the list
console.log(list.length()); // 3

// Insert new item at the first position of the list
list.pushFirst(40);
console.log(list.length()); // 4

// Access the item at zeroth-index of the list
let x = list.itemAt(0);
console.log(x); // 40

// Remove the last item from the list
x = list.pop();
console.log(x); // 30

// Remove the first item from the list
x = list.popFirst();
console.log(x); // 40

// Remove item at given index from the list
x = list.removeAt(1);
console.log(x); // 20

// Add more data
list.push(20);
list.push(30);
list.push(40);

// Generate array from the list
const arr = list.traverse();
console.log(arr); // [ 10, 20, 30, 40 ]

// Search an item from the list
const dot = list.search((item) => item === 30);
if (dot !== null) console.log(dot.data);

// Empty the list
list.clear();
console.log(list.length()); // 0
