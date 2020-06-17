function queue(){
     this.data = [];
     this.enqueue = enqueue;
     this.dequeue = dequeue;
     this.front = front;
     this.back = back;
     this.toString = toString;
     this.empty = empty;
}
function enqueue(element){
    this.data.push(element);
}

function dequeue(element){
    return this.data.shift();
}

function front(){
    return this.data[0];
}

function back(){
    return this.data[this.data.length-1];
}

function toString(){
    var restr = "";
    for(var i=0; i<this.data.length; i++){
        restr += this.data[i]+ "\n";
    }
    return restr
}

function empty(){
    if(this.data.length==0){
        return true;
    }else{
        return false;
    }
}

var que = new queue();
que.enqueue("amazon");
que.enqueue("flipkart");
que.enqueue("accenture");
que.enqueue("sap");
console.log(que.toString());

var delelement =que.dequeue();
console.log("dequeue element is: "+delelement)

console.log("\n"+que.toString());

console.log("head of queue is: "+que.front());
console.log("tail of queue is: "+que.back());