import MaxBinaryHeap from "../../PriorityQueue/MaxBinaryHeap";

describe("Max Binary Heap", () => {
  test("can create heap without error", () => {
    const heap = new MaxBinaryHeap();
    expect(heap.size()).toBe(0);
  });

  test(".traverse() can return empty array when heap is empty", () => {
    const heap = new MaxBinaryHeap();
    expect(heap.traverse()).toHaveLength(0);
  });

  test(".add() can add a new item into heap", () => {
    const heap = new MaxBinaryHeap();
    expect(heap.add(10)).toBeTruthy();
    expect(heap.size()).toBe(1);
    expect(heap.add(10)).toBeTruthy();
    expect(heap.size()).toBe(2);
  });

  test(".traverse() can return array in heap", () => {
    const heap = new MaxBinaryHeap();
    heap.add(10);
    expect(heap.traverse()).toEqual([10]);
    heap.add(10);
    expect(heap.traverse()).toEqual([10, 10]);
    heap.add(10);
    expect(heap.traverse()).toEqual([10, 10, 10]);
  });

  test(".add() can arrange items in heap without violation of the heap invariant", () => {
    const heap = new MaxBinaryHeap();
    heap.add(10);
    heap.add(20);
    expect(heap.traverse()).toEqual([20, 10]);
    heap.add(20);
    expect(heap.traverse()).toEqual([20, 10, 20]);
    heap.add(30);
    expect(heap.traverse()).toEqual([30, 20, 20, 10]);
    heap.add(10);
    expect(heap.traverse()).toEqual([30, 20, 20, 10, 10]);
  });

  test(".peek() throw error when trying to peek first item in empty heap", () => {
    const heap = new MaxBinaryHeap();
    expect(() => heap.peek()).toThrowError("Empty heap");
  });

  test(".peek() return first largest item in heap", () => {
    const heap = new MaxBinaryHeap();
    heap.add(10);
    expect(heap.peek()).toBe(10);
    heap.add(20);
    expect(heap.peek()).toBe(20);
  });

  test(".retrieve() throw error when trying to retrieve item in empty heap", () => {
    const heap = new MaxBinaryHeap();
    expect(() => heap.retrieve()).toThrowError("Empty heap");
  });

  test(".retrieve() can retrieve largest item in heap", () => {
    const heap = new MaxBinaryHeap();
    heap.add(10);
    heap.add(20);
    heap.add(30);
    heap.add(40);
    expect(heap.retrieve()).toBe(40);
    expect(heap.size()).toBe(3);
    expect(heap.retrieve()).toBe(30);
    expect(heap.size()).toBe(2);
  });

  test(".retrieve() can arrange items in heap without violation of the heap invariant", () => {
    const heap = new MaxBinaryHeap();
    heap.add(10);
    heap.add(20);
    heap.add(30);
    heap.add(40);
    heap.add(50);
    heap.add(60);
    heap.add(20);
    heap.add(10);
    heap.retrieve();
    expect(heap.traverse()).toEqual([50, 40, 20, 10, 30, 10, 20]);
    heap.retrieve();
    expect(heap.traverse()).toEqual([40, 30, 20, 10, 20, 10]);
    heap.retrieve();
    expect(heap.traverse()).toEqual([30, 20, 20, 10, 10]);
    heap.retrieve();
    expect(heap.traverse()).toEqual([20, 10, 20, 10]);
    heap.retrieve();
    expect(heap.traverse()).toEqual([20, 10, 10]);
    heap.retrieve();
    expect(heap.traverse()).toEqual([10, 10]);
    heap.retrieve();
    expect(heap.traverse()).toEqual([10]);
    heap.retrieve();
    expect(heap.traverse()).toEqual([]);
  });
});
