class Stack {
  static arr = [];
  static top = 0;

  pop() {
    if (Stack.top > 0) {
      Stack.top = Stack.top - 1;
      return Stack.arr[Stack.top + 1];
    } else {
      return Stack.arr[Stack.top];
    }
  }

  push(x) {
      if (Stack.arr.length > 0) {
        Stack.top = Stack.top + 1
        Stack.arr[Stack.top] = x;
      } else {
        Stack.arr[Stack.top] = x;
      }
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(Stack.arr);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
