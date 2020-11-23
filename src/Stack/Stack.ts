import LinkedList from "../Linked_List/LinkedList";

export interface iStack<T> {
  size(): number;
  push(data: T): void;
  pop(): T;
  peek(): T;
}

export default class Stack<T> implements iStack<T> {
  private list: LinkedList<T> = new LinkedList<T>();

  // Check if the list is empty
  private isEmpty(): boolean {
    return this.size() === 0;
  }

  // Return the length of the stack
  public size(): number {
    return this.list.length();
  }

  // Add element to the end of stack, O(1)
  public push(data: T): void {
    this.list.push(data);
  }

  // Remove last element in stack, O(1)
  public pop(): T {
    if (this.isEmpty()) throw new Error("Empty stack");
    return this.list.pop();
  }

  // View the last element in stack, O(1)
  public peek(): T {
    if (this.isEmpty()) throw new Error("Empty stack");
    return this.list.itemAt(this.list.length() - 1);
  }
}
