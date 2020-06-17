class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class doublylikedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
doublylikedlist.prototype.push =  function (value){
    const newNode = new Node (value);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }else{
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
}

doublylikedlist.prototype.pop = function(){
    if(this.length ==0){
        return false;
    }
    var delelement = this.tail;
    var newTail = this.tail.prev;

    if(newTail){
        newTail.next = null;
        this.tail.prev = null
    }else{
        this.head = null;
    }
    this.tail = newTail;
    this.length--;
    return delelement
}

doublylikedlist.prototype.reverse = function(){
    var curent = this.tail;
    while(curent != null){
        curent = curent.prev;
    }
}


var list = new doublylikedlist();
list.push(3);
list.push(2);
list.push(4);
list.push(6);
console.log("--------- push operation -------")
console.log(list)

console.log("-------- pop opration --------")

list.pop(2)
console.log(list);

console.log("-------- reverse ----------")
list.reverse();
console.log(list);
