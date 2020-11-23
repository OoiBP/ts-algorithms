import LinkedList from "../Linked_List/LinkedList";

export interface iStack<T> {
  size(): number;
  push(data: T): void;
  pop(): T;
  peek(): T;
}

export default class Stack<T> implements iStack<T> {
  private list: LinkedList<T> = new LinkedList<T>();

  private isEmpty(): boolean {
    return this.size() === 0;
  }

  public size(): number {
    return this.list.length();
  }

  public push(data: T): void {
    this.list.push(data);
  }

  public pop(): T {
    if (this.isEmpty()) throw new Error("Empty stack");
    return this.list.pop();
  }

  public peek(): T {
    if (this.isEmpty()) throw new Error("Empty stack");
    return this.list.itemAt(this.list.length() - 1);
  }
}
