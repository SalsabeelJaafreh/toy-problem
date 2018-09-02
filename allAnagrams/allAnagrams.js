/*
Given a single input string, write a function that produces all possible
anagrams of a string and outputs them as an array.
At first, don’t worry about repeated strings. 
What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples

Input				Output
string:
"abc"				[ "abc", "acb", "bac", "bca", "cab", "cba" ]

*/

function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.
  var arr = [];
  //case1 
  if(string.length===1){
    arr.push(string)
    return arr
  }
  
  //case 2
  if(string.length===2){
   for(var i = 0 ; i < string.length-1 ; i++){
      arr.push(string[i]+string[i+1])
       arr.push(string[i+1]+string[i])
   }
   return arr
  }
  
  //case 3
  if(string.length===3){
  for(var x = 0 ; x< string.length ; x++){
    for(var y = 0 ; y < string.length ; y++){
      for(var z = 0 ; z < string.length ; z++){
        if(x!==y && x!==z && y!==z){
        arr.push(string[x]+string[y]+string[z])
        }
      }
    }
  }
    return arr
  } 
  
  //case 4
  if(string.length===4){
    for(var x = 0 ; x < string.length ; x++){
     for(var y = 0 ; y < string.length ; y++){
      for(var z = 0 ; z < string.length ; z++){
         for(var l = 0 ; l < string.length ; l++){
        if(x!==y && x!==z && x!==l && y!==z && y!==l && z!==l){
          if(!arr.includes(string[i]+string[x]+string[j]+string[a])){
        arr.push(string[x]+string[y]+string[z]+string[l])
          }
        }
