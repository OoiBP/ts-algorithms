import LinkedList from "../Linked_List/LinkedList";

export interface iQueue<T> {
  length(): number;
  enqueue(data: T): void;
  dequeue(): T;
  peek(): T;
}

export default class Queue<T> implements iQueue<T> {
  private list: LinkedList<T> = new LinkedList<T>();

  // Check if the list is empty
  private isEmpty(): boolean {
    return this.length() === 0;
  }

  // Return the length of the queue
  public length(): number {
    return this.list.length();
  }

  // Add element to the end of queue, O(1)
  public enqueue(data: T): void {
    this.list.push(data);
  }

  // Remove first element in queue, O(1)
  public dequeue(): T {
    if (this.isEmpty()) throw new Error("Empty queue");
    return this.list.popFirst();
  }

  // View the last element in queue, O(1)
  public peek(): T {
    if (this.isEmpty()) throw new Error("Empty queue");
    return this.list.itemAt(0);
  }
}
