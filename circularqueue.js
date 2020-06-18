var circularQueue = function(){
    // this.queue = new Array(num).fill(-1);
    this.queue = new Array()
    this.front = -1;
    this.rear = -1;
};

// add an element in circular queue
circularQueue.prototype.enQueue = function(value){
    if(this.rear ==-1 && this.front ==-1){
        this.rear = 0;
        this.front = 0;
        this.queue[0]=value;
        return true;
    }
    else{
        if((this.rear+1)%this.queue.length==this.front){
            return false;
        }else{
            this.rear=(this.rear+1)%this.queue.length;
            this.queue[this.rear]=value;
            return true;
        }
    }   
};

// delete an element in circular queue
circularQueue.prototype.deQueue = function(){
    if(this.rear == -1 && this.front == -1){
        return false;
    }
    else if(this.rear == this.front){
        this.queue[this.front]=-1;
        this.front=-1;
        this.rear = -1;
        return true;
    }
    else{
        this.queue[this.front]=-1;
        this.front=(this.front+1)%this.queue.length;
        return true;
    }
};

// front element in circular queue
circularQueue.prototype.Front = function(){
    if(this.front != -1){
        return this.queue[this.front];
    }
    return -1
};

// rear element
circularQueue.prototype.Rear = function(){
    if(this.rear !=-1){
        return this.queue[this.rear];
    }
    return -1;
};



var list = new circularQueue();
list.enQueue(2);
console.log(list)


list.Front();
console.log(list);

list.Rear();
console.log(list)

list.deQueue();
console.log(list)
