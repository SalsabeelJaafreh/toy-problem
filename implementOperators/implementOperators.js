/*  Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction.
Your functions will only have to handle integer math.
Note: Don’t put any complex math in the comments in your code, or the tests may fail.
EXAMPLES:
multiply(5, 2) === 10
divide(5, 2) === 2
modulo(5, 2) === 1  */

var multiply = function(x, y) {

    if(x == 0|| y == 0){
        return 0;
    }
    else if(y > 0) {
        return x + multiply(x, y - 1);
    }
     return - multiply(x, -y);
};


var divide = function(x, y) {
if(x===0&&y==0){
  return "NaN"
}
   var count =0;
  for(var i=y;i>0;i--){
     x=x-y
    count++
}
   return count;
  
};

var modulo = function(x, y) {
  for(var i=x;i>=y;i--){
       x=x-y
}
    return x;
};
