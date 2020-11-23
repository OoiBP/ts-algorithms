import Queue from "../../Queue/Queue";

describe("Queue", () => {
  test("can create queue without error", () => {
    const queue = new Queue<string>();
    expect(queue.length()).toBe(0);
  });

  test(".enqueue() can insert a new item into queue", () => {
    const queue = new Queue<string>();
    queue.enqueue("First");
    expect(queue.length()).toBe(1);
    queue.enqueue("Second");
    expect(queue.length()).toBe(2);
  });

  test(".dequeue() throw error when trying to remove item from empty queue", () => {
    const queue = new Queue<string>();
    expect(() => queue.dequeue()).toThrowError("Empty queue");
  });

  test(".dequeue() can remove first item from queue", () => {
    const queue = new Queue<string>();
    queue.enqueue("First");
    queue.enqueue("Second");
    expect(queue.dequeue()).toBe("First");
    expect(queue.dequeue()).toBe("Second");
  });

  test(".peek() throw error when trying to peek item from empty queue", () => {
    const queue = new Queue<string>();
    expect(() => queue.peek()).toThrowError("Empty queue");
  });

  test(".peek() can peek the first item in queue", () => {
    const queue = new Queue<string>();
    queue.enqueue("First");
    expect(queue.peek()).toBe("First");
    queue.enqueue("Second");
    expect(queue.peek()).toBe("First");
    queue.dequeue();
    expect(queue.peek()).toBe("Second");
  });
});
