function Node(data){
    this.data =data;
    this.next = null;
}

function singlylist(){
    this.length = 0;
    this.head =null;
}

// add an node in list
singlylist.prototype.add = function(value){
    var node = new Node(value);
    curentNode = this.head;

// if empty list
    if(!curentNode){
        this.head = node;
        this.length ++;
        return node
    }

// a non-empty list 
    while(curentNode.next){
        curentNode = curentNode.next;
    }
    curentNode.next = node;
    this.length++;
    return node;
}

// remove node in list
singlylist.prototype.remove = function(index){
    var curentNode = this.head;
    length = this.length;
    var count =0;
    beforNodedelete = null;
    deletingNode = null;
    deletedNode = null;
   
// an invailid position
    if(index<0 || index>length){
        console.log("non-existent node")
    }

// first node is removing
    if(index == 1){
        this.head = curentNode.next;
        deletedNode = curentNode;
        curentNode = null;
        this.length--;

        return deletedNode;
    }

    while(count<index){
        beforNodedelete = curentNode;
        deletingNode = curentNode.next;
        count++;
    }
    beforNodedelete.next = deletingNode.next;
    deletedNode = deletingNode;
    deletingNode=null;
    this.length--;

    return deletedNode;

}


var list = new singlylist();
list.add(3);
list.add(4);
console.log(list)

list.remove(2);
console.log(list)

list.add(6);
console.log(list)