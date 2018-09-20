/* Given a string, remove any characters that are not unique from the string.

Examples
------------------------------------
Input                 |	Output
------------------------------------
str:                  |
"abccdefe"            | "abdf"
------------------------------------                      
str:                  | 
"hello there"         | "o tr"
------------------------------------                      
str:                  |
"xyz"	              | "xyz"
------------------------------------                      
str:                  |
"iiii"                |	""
------------------------------------
*/

function onlyUnique (str) {
  // Write your code here, and
  // return your final answer.
  var count=0;
  var str1=''
  for(var i=0;i<str.length;i++){
    count=0 
  for(var j=0;j<str.length;j++){
    if(str[i]===str[j]){
        count++
    }
  }
  if(count===1){
    str1+=str[i];
  }
  }
  return str1;
  // var str1 = '';
  // var obj = {};
  // for (var i = 0; i<str.length ; i++){
  //     obj[str[i]]=0
  // }
  // for(var j =0 ; j<str.length ;j++){
  //   if(obj.hasOwnProperty(str[j])){
  //     obj[str[j]]+=1
  //   }
  // }
  // for(var key in obj){
  //   if(obj[key] === 1){
  //     str1+=key
  //   }
  // }
  // return str1
}
