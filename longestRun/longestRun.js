/* Write a function that, given a string, 
finds the longest run of identical characters and 
returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs. */
//Examples:

/* Input	     Output
  
  "abbbcc"	     [ 1, 3 ]

  "aabbc"	    [ 0, 1 ]

    ""	        [ 0, 0 ]

"mississippi"   [ 2, 3 ]

"abcdefgh"	    [ 0, 0 ]

"abccccccc"	    [ 2, 8 ]  */


function longestRun (string) {
  var count=0;
  var j=0;
  var res=[];
 for(var i=0;i<string.length;i++){
   for(var j=1;j>string.length;j++)
   if(string[i]===string[j]){
  count++;
  
     while(string[i]===string[j]){
       count++;
       j++;
 
     }
     
   }}
 res.push(count,j)
  // return the final answer.
  return res; 
}
