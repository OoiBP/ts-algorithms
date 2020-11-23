import LinkedList, { Dot } from "../../Linked_List/LinkedList";

describe("Linked List", () => {
  test("can create dot without error", () => {
    const dot = new Dot(10);
    expect(dot.data).toBe(10);
  });

  test("can create list without error", () => {
    const list = new LinkedList();
    expect(list.length()).toBe(0);
  });

  test(".push() can insert a new node into list", () => {
    const list = new LinkedList<number>();
    list.push(10);
    expect(list.length()).toBe(1);
    list.push(20);
    expect(list.length()).toBe(2);
  });

  test(".itemAt() throw error when trying to access node on invalid index", () => {
    const list = new LinkedList<number>();
    // wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    expect(() => list.itemAt(0)).toThrow("Index out of bound");
  });

  test(".itemAt() throw error when trying to access node on negative indexing", () => {
    const list = new LinkedList<number>();
    expect(() => list.itemAt(-1)).toThrow("Index out of bound");
  });

  test(".itemAt() can access node through indexing", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    list.push(70);
    list.push(80);
    list.push(90);
    expect(list.itemAt(0)).toBe(10);
    expect(list.itemAt(1)).toBe(20);
    expect(list.itemAt(5)).toBe(60);
  });

  test(".pushFirst() can insert new node at first index when list is empty", () => {
    const list = new LinkedList<number>();
    list.pushFirst(20);
    expect(list.length()).toBe(1);
    expect(list.itemAt(0)).toBe(20);
  });

  test(".pushFirst() can insert new node at zero index", () => {
    const list = new LinkedList<number>();
    list.push(10);
    expect(list.itemAt(0)).toBe(10);
    list.pushFirst(20);
    expect(list.length()).toBe(2);
    expect(list.itemAt(0)).toBe(20);
    expect(list.itemAt(1)).toBe(10);
  });

  test(".pop() throw error when trying to remove node from empty list", () => {
    const list = new LinkedList<number>();
    expect(() => list.pop()).toThrow("Empty list");
  });

  test(".pop() can remove node from list", () => {
    const list = new LinkedList<number>();
    list.push(10);
    expect(list.pop()).toBe(10);
    expect(list.length()).toBe(0);
  });

  test(".pop() can remove last node from list", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.length()).toBe(1);
  });

  test(".popFirst() throw error when trying to remove first node from empty list", () => {
    const list = new LinkedList<number>();
    expect(() => list.popFirst()).toThrow("Empty list");
  });

  test(".popFirst() can remove node from list", () => {
    const list = new LinkedList<number>();
    list.push(10);
    expect(list.popFirst()).toBe(10);
    expect(list.length()).toBe(0);
  });

  test(".popFirst() can remove first node from list", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    expect(list.popFirst()).toBe(10);
    expect(list.length()).toBe(1);
  });

  test(".removeAt() throw error when trying to remove node on invalid index", () => {
    const list = new LinkedList<number>();
    expect(() => list.removeAt(0)).toThrow("Index out of bound");
  });

  test(".removeAt() throw error when trying to remove node on negative indexing", () => {
    const list = new LinkedList<number>();
    expect(() => list.removeAt(-1)).toThrow("Index out of bound");
  });

  test(".removeAt() throw error when trying to remove node on non-existing index", () => {
    const list = new LinkedList<number>();
    list.push(10);
    expect(() => list.removeAt(2)).toThrow("Index out of bound");
  });

  test(".removeAt() can remove node from list given first index", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    list.push(70);
    list.push(80);
    list.push(90);
    expect(list.removeAt(0)).toBe(10);
    expect(list.length()).toBe(8);
  });

  test(".removeAt() can remove node from list given last index", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    list.push(70);
    list.push(80);
    list.push(90);
    expect(list.removeAt(8)).toBe(90);
    expect(list.length()).toBe(8);
  });

  test(".removeAt() can remove node from list given first-half index", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    list.push(70);
    list.push(80);
    list.push(90);
    expect(list.removeAt(1)).toBe(20);
    expect(list.length()).toBe(8);
  });

  test(".removeAt() can remove node from list given second-half index", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    list.push(70);
    list.push(80);
    list.push(90);
    expect(list.removeAt(6)).toBe(70);
    expect(list.length()).toBe(8);
  });

  test(".clear() can empty the list", () => {
    const list = new LinkedList<number>();
    list.clear();
    expect(list.length()).toBe(0);
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    list.clear();
    expect(list.length()).toBe(0);
  });

  test(".traverse() can generate empty array when list is empty", () => {
    const list = new LinkedList<number>();
    expect(list.traverse()).toHaveLength(0);
  });

  test(".traverse() can generate array", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);
    list.push(60);
    expect(list.traverse()).toHaveLength(6);
  });

  test(".search() return null when item not exist on search", () => {
    const list = new LinkedList<number>();
    let result = list.search((item) => true);
    expect(result).toBeNull();

    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);

    result = list.search((item) => item === 70);
    expect(result).toBeNull();
  });

  test(".search() return item when item exist on search", () => {
    const list = new LinkedList<number>();
    list.push(10);
    list.push(20);
    list.push(30);
    list.push(40);
    list.push(50);

    let result = list.search((item) => item === 30);
    expect(result?.data).toBe(30);
  });
});
