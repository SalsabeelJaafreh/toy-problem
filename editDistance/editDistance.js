/*Given two strings, find the minimum number of edits
operations required to convert the first string into the second string, 
given that the only operations can be insertion, removal, or replacement.
Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

Examples:
Input	         Output
str1:
"cat"
str2:           	1
"cut"
	         	
str1:
"wednesday"
str2:
"sunday"	        5

str1:
"hackerrank"
str2:
"hackreactor"	    6 */
function editDistance (str1, str2) {
  // Write your code here, and
  // return your final answer.
  var count=0;
  for(var i=0;i<str1.length;i++){
  if(str2.includes(str1[i])){
    count+=0;
  }
  else{count++}
  
}
return count; 
}