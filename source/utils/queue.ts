export default class Queue {
  public elements: any[];

  constructor() {
    this.elements = [];
  }

  // add an element to the queue
  enqueue(element: any) {
    this.elements.push(element);
  }

  // remove an element from the front of the queue
  dequeue() {
    return this.elements.shift();
  }

  // check if queue is empty
  isEmpty() {
    return this.elements.length == 0;
  }

  // view first item in queue
  peek() {
    return !this.isEmpty() ? this.elements[0] : undefined;
  }

  // view queue size
  size() {
    return this.elements.length;
  }
}
