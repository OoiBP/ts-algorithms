export class Dot<T> {
  public next: Dot<T> | null = null;
  public prev: Dot<T> | null = null;
  constructor(public data: T) {}
}

export interface List<T> {
  length(): number;
  clear(): void;
  push(data: T): Dot<T>;
  pushFirst(data: T): Dot<T>;
  pop(): T;
  popFirst(): T;
  removeAt(index: number): T;
  itemAt(index: number): T;
  traverse(): T[];
  search(comparator: (data: T) => boolean): Dot<T> | null;
}

export default class LinkedList<T> implements List<T> {
  private size: number = 0;
  private head: Dot<T> | null = null;
  private tail: Dot<T> | null = null;

  // Create a new element
  private dot(data: T, prev: Dot<T> | null, next: Dot<T> | null): Dot<T> {
    return {
      data,
      prev,
      next,
    };
  }

  // Check if the list is empty
  private isEmpty(): boolean {
    if (this.size === 0) return true;
    else return false;
  }

  // Return the length of the list
  public length(): number {
    return this.size;
  }

  // Empty linked list, O(n)
  public clear(): void {
    const remove = (dot: Dot<T>): void => {
      const next = dot.next;
      if (!dot.prev) this.head = null;
      if (!dot.next) this.tail = null;
      dot.prev = dot.next = null;
      next ? remove(next) : null;
    };

    this.head ? remove(this.head) : null;
    this.size = 0;
  }

  // Add element to the end of list, O(1)
  public push(data: T): Dot<T> {
    if (this.isEmpty()) {
      this.head = this.tail = this.dot(data, null, null);
    } else {
      this.tail!.next = this.dot(data, this.tail, null);
      this.tail = this.tail!.next;
    }
    this.size++;
    return this.tail;
  }

  // Add element to the beginning of list, O(1)
  public pushFirst(data: T): Dot<T> {
    if (this.isEmpty()) {
      this.head = this.tail = this.dot(data, null, null);
    } else {
      this.head!.prev = this.dot(data, null, this.head);
      this.head = this.head!.prev;
    }
    this.size++;
    return this.head;
  }

  // Remove last element in list, O(1)
  public pop(): T {
    if (this.isEmpty()) throw new Error("Empty list");

    let data = this.tail!.data;
    this.tail = this.tail!.prev;
    --this.size;

    if (this.isEmpty()) this.head = null;
    else this.tail!.next = null;

    return data;
  }

  // Remove first element in list, O(1)
  public popFirst(): T {
    if (this.isEmpty()) throw new Error("Empty list");

    let data = this.head!.data;
    this.head = this.head!.next;
    --this.size;

    if (this.isEmpty()) this.tail = null;
    else this.head!.prev = null;

    return data;
  }

  // Remove an arbitrary element from list, O(1)
  private remove(dot: Dot<T>): T {
    if (dot.prev === null) return this.popFirst();
    if (dot.next === null) return this.pop();

    dot.next.prev = dot.prev;
    dot.prev.next = dot.next;

    let data = dot.data;

    dot.prev = dot.next = null;
    --this.size;

    return data;
  }

  // Remove an element at a given index, O(n)
  public removeAt(index: number): T {
    if (index < 0 || index >= this.size) throw new Error("Index out of bound");

    let i: number;
    let trav: Dot<T>;

    if (index < this.size / 2) {
      for (i = 0, trav = this.head!; i !== index; i++) {
        trav = trav.next!;
      }
    } else {
      for (i = this.size - 1, trav = this.tail!; i !== index; i--) {
        trav = trav.prev!;
      }
    }

    return this.remove(trav);
  }

  // Retrieve an element at a given index, O(n)
  public itemAt(index: number): T {
    if (index < 0 || index >= this.size) throw new Error("Index out of bound");

    let i: number;
    let trav: Dot<T>;

    if (index < this.size / 2) {
      for (i = 0, trav = this.head!; i !== index; i++) {
        trav = trav.next!;
      }
    } else {
      for (i = this.size - 1, trav = this.tail!; i !== index; i--) {
        trav = trav.prev!;
      }
    }

    return trav.data;
  }

  // Iterate the list and return data as array, O(n)
  public traverse(): T[] {
    const array: T[] = [];
    if (!this.head) {
      return array;
    }

    const addToArray = (dot: Dot<T>): T[] => {
      array.push(dot.data);
      return dot.next ? addToArray(dot.next) : array;
    };
    return addToArray(this.head);
  }

  // Search the list and return matching element, O(n)
  public search(comparator: (data: T) => boolean): Dot<T> | null {
    const checkNext = (dot: Dot<T>): Dot<T> | null => {
      if (comparator(dot.data)) {
        return dot;
      }
      return dot.next ? checkNext(dot.next) : null;
    };

    return this.head ? checkNext(this.head) : null;
  }
}
