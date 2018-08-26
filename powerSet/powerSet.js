/* Return an array that contains the power set of a given string. 
The power set is a set of all the possible subsets,
including the empty set.
Make sure your code does the following:
All characters in a subset should be sorted alphabetically, 
and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once,
e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as 
if it only contained one ‘a’. See the result below.
Examples
Input	       Output
string:
"a"	           [ "", "a" ]
string:
"ab"	   [ "", "a", "ab", "b" ]

string:
"horse"	  [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]

string:
"obama"  	[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]*/

function powerSet (string) {
  // Write your code here, and
  // return your final answer.
  // var a="";
  // var arr=[]
  // for(var i=0;i<string.length;i++){
  //   for(var j=1;j<string.length;j++){
  //     arr.push(string[i])
  //     arr.push(string[j])
 
              
  //   }
  // }
  // return arr;

    var arr =[];
  var result=[];
  var str='';
  for(var i=0;i<string.length;i++){
    if(!arr.includes(string[i])){
      arr.push(string[i]);
    }
  }
  arr.sort();
  for(var i=0;i<arr.length+1;i++){
    str='';
    for(var j=0;j<i;j++){
  
      str=str+arr[j];
    }
    if(str!==''){

      result.push(str);
    }
  }

}

//i can't solve it now, but i will back to it after i understand how it works 
