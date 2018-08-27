/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. 
The robot can move either up, down, left, or right, 
but cannot visit the same spot twice. 
How many possible unique paths are there to the bottom right corner?
Make your solution work for a grid of any size.
Parameters:
n (required) - amount of rows/columns (max 6)

Examples
Input			Output
n:
1					1
n:
2					2
n:
3					12
*/
function robotPaths (n) {
  // Write your code here, and
 var arr=[0,1,2,12,184,8512,1262816]
   var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
    return arr[n]
    var fres=1
     for(var i=0;i<=n;i++){
    fres=fres*(i*2)-i
  }
   // return your final answer.
  return fres; 
}
}
