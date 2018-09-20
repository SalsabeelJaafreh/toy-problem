/*
Given an arbitrary input string, return the first non-repeating character. 
For strings with all repeats, return 'sorry'.

Examples
-------------------------------------------------
Input                                	Output
-------------------------------------------------
string:
"ABCDBIRDUP"	                         "A"

string:
"XXXXXXX"	                           "sorry"

string:
"ALAMABA"	                             "L"

string:
"BABA"	                               "sorry"
-------------------------------------------------
*/

function firstNonRepeatedCharacter (string) {
  // Write your code here, and
  var count=0;
  for(var i=0;i<string.length;i++){
    for(var j=1;j<string.length;j++){
      if(string[i]!==string[j]){
        count=0
        
      }
      else{count++}
      
    }
   if(count===0){
    return string[i];
   }
  }
  return "sorry"
  
  
}
  
  
  
  

  
//   var ar=string.split('')
//   for(var i=0;i<ar.length;i++){
//   for(var j=1;j<ar.length;j++) {
//   if(ar[i]!==ar[j]){
//   }
  
// }
// return ar[i]
// }
// return "sorry"
// }

  
  
