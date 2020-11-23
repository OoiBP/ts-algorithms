import Stack from "../../Stack/Stack";

describe("Stack", () => {
  test("can create stack without error", () => {
    const stack = new Stack<string>();
    expect(stack.size()).toBe(0);
  });

  test(".push() can insert a new item into stack", () => {
    const stack = new Stack<string>();
    stack.push("First");
    expect(stack.size()).toBe(1);
    stack.push("Second");
    expect(stack.size()).toBe(2);
  });

  test(".pop() throw error when trying to remove item from empty stack", () => {
    const stack = new Stack<string>();
    expect(() => stack.pop()).toThrowError("Empty stack");
  });

  test(".pop() can remove last item from stack", () => {
    const stack = new Stack<string>();
    stack.push("First");
    stack.push("Second");
    expect(stack.pop()).toBe("Second");
    expect(stack.pop()).toBe("First");
  });

  test(".peek() throw error when trying to peek item from empty stack", () => {
    const stack = new Stack<string>();
    expect(() => stack.peek()).toThrowError("Empty stack");
  });

  test(".peek() can ppek the last item in stack", () => {
    const stack = new Stack<string>();
    stack.push("First");
    expect(stack.peek()).toBe("First");
    stack.push("Second");
    expect(stack.peek()).toBe("Second");
  });
});
