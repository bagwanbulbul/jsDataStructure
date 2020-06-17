function Stack(){
    this.data = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
}
// function add an element to the stack
function push(element){
    this.data[this.top++]=element;
}

// function get the top element of the stack
function peek(){
    return this.data[this.top-1];
}
// function delete an elemnet from the stack 
function pop(){
    return this.data[--this.top];
}

// function return the length of the stack
function length(){
    return this.top;
}


var stack = new Stack();
stack.push("apple");
stack.push("bnana");
stack.push("mango")
console.log("length: "+stack.length());
console.log(stack.peek());

var delElement = stack.pop();
console.log("The deleted element is: "+ delElement)
console.log(stack.peek());

stack.push("green");
console.log(stack.peek())

stack.push("diamond");
console.log(stack.peek());