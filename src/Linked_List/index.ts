import LinkedList from "./LinkedList";

let list = new LinkedList<number>();

console.log(list.length());

list.push(10);
list.push(20);
list.push(30);
console.log(list.length());

list.pushFirst(40);
console.log(list.itemAt(0));

console.log(list.pop());
console.log(list.popFirst());

console.log(list.traverse());
