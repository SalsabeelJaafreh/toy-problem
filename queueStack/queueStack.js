//Write a stack. Once you’re done, 
//implement a queue using two stacks to create FIFO behavior. 
//The queue should not have any storage separate from its stacks.
var Stack = function() {
	var storage = [];
	var counter=0;

	this.push = function(elem){
		storage[counter]=elem
		counter++;

	};

	this.pop = function(){
		var Delem=storage[counter-1]
		delete storage[counter-1]
		counter--;
		return Delem;

	};

	this.size = function(){
		return counter;

	};
};

var Queue = function() {

	var inbox = new Stack();
	var outbox = new Stack();

 this.enqueue = function(val){
  var length= outbox.size();
   for(var i =0;i<length; i++){
     inbox.push(outbox.pop())
   }
   inbox.push(val);
 };
 

 
 this.dequeue = function(){
   var length= inbox.size();
   for(var i =0;i<length; i++){
     outbox.push(inbox.pop())
     }
   return outbox.pop();
 };


	this.size = function(){
		return inbox.size();

	};
};
