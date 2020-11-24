export default class MaxBinaryHeap {
  private list: number[];

  constructor() {
    this.list = [];
  }

  private isEmpty(): boolean {
    return this.size() === 0;
  }

  // Return the size of the heap
  public size(): number {
    return this.list.length;
  }

  // Return data as an array, O(1)
  public traverse(): number[] {
    return this.list;
  }

  // Return the first largest item in the heap, O(1)
  public peek(): number {
    if (this.isEmpty()) throw new Error("Empty heap");
    return this.list[0];
  }

  // Add a new item into the heap and bubble it up, O(log(n))
  public add(data: number): boolean {
    if (this.isEmpty()) {
      this.list.push(data);
      return true;
    }

    this.list.push(data);
    return this.bubbleUp(this.list.length - 1);
  }

  // Function to bubble up a node if the condition satisfy heap invariant
  private bubbleUp(index: number): boolean {
    const element = this.list[index];
    const parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex >= 0 && this.list[parentIndex] < element) {
      this.swapIndex(index, parentIndex);
      return this.bubbleUp(parentIndex);
    }

    return true;
  }

  // Swap two elements at given indices
  private swapIndex(a: number, b: number) {
    [this.list[a], this.list[b]] = [this.list[b], this.list[a]];
  }

  // Retrive the first largest item in the heap, O(log(n))
  public retrieve(): number {
    if (this.isEmpty()) throw new Error("Empty heap");

    if (this.list.length === 1) return this.list.pop()!;

    const max = this.list[0];
    const end = this.list.pop()!; // .pop() never return undefined
    this.list[0] = end;

    this.sinkDown(0);

    return max;
  }

  // Function to sink down a node if the condition satisfy heap invariant
  private sinkDown(index: number): void {
    const element = this.list[index];
    const leftChildIdx = 2 * index + 1;
    const rightChildIdx = 2 * index + 2;

    let leftChild: number;
    let rightChild: number;
    let swap = false;
    let idxToSwap: number;

    // Check with the left child only if it is a valid index
    if (leftChildIdx < this.list.length) {
      leftChild = this.list[leftChildIdx];
      if (element < leftChild) {
        swap = true;
        idxToSwap = leftChildIdx;
      }
    }

    // Check with the right child only if it is a valid index
    if (rightChildIdx < this.list.length) {
      rightChild = this.list[rightChildIdx];
      // If the previous check is to swap with left child, check left and right children
      // Else check node with right child
      if (
        (swap && leftChild! < rightChild) ||
        (!swap && element < rightChild)
      ) {
        swap = true;
        idxToSwap = rightChildIdx;
      }
    }

    if (swap) {
      this.swapIndex(index, idxToSwap!);
      return this.sinkDown(idxToSwap!);
    }
    return;
  }
}
