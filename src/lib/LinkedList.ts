export class Node {
  data: number;
  next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data: number): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current: Node | null = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  clone(): LinkedList {
    const newList = new LinkedList();
    let current = this.head;
    while (current !== null) {
      newList.insert(current.data);
      current = current.next;
    }
    return newList;
  }

  delete(data: number): void {
    console.log('Attempting to delete:', data);
    if (!this.head) {
      console.log('No nodes in the list.');
      return;
    }

    // Case: If the node to be deleted is the head node
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current: Node | null = this.head;
    let previous: Node | null = null;

    // Traverse the list to find the node to be deleted
    while (current !== null && current.data !== data) {
      previous = current;
      current = current.next;
    }

    // If the node is not found, exit the function
    if (!current) {
      console.log('Node not found in the list.');
      return;
    }

    // Update the previous node's next reference to skip the current node
    if (previous) {
      previous.next = current.next;
    }

    // Decrement the size of the list
    this.size--;
  }

  search(data: number): boolean {
    let current: Node | null = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  reverse(): void {
    let current: Node | null = this.head;
    let previous: Node | null = null;
    while (current) {
      const next: Node | null = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  findMiddle(): Node | null {
    let slow: Node | null = this.head;
    let fast: Node | null = this.head;

    if (!slow) return null;
    while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
    }

    return slow;
  }

  static mergeSorted(list1: LinkedList, list2: LinkedList): LinkedList {
    const dummyHead = new Node(0);
    let current: Node | null = dummyHead;
    let p1: Node | null = list1.head;
    let p2: Node | null = list2.head;

    while (p1 && p2) {
      if (p1.data < p2.data) {
        current.next = p1;
        p1 = p1.next;
      } else {
        current.next = p2;
        p2 = p2.next;
      }
      current = current.next;
    }

    current.next = p1 || p2;

    const mergedList = new LinkedList();
    mergedList.head = dummyHead.next;
    return mergedList;
  }

  getElements(): number[] {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    return elements;
  }
}
