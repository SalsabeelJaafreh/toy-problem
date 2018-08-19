/*Implement a function that finds the longest palindrome in a given string. 
For example, in the string “My dad is a racecar athlete”, 
the longest palindrome is “a racecar a”. 
Count whitespaces as valid characters.
Other palindromes in the above string 
include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
Examples
Input	                            Output
string:
"aibohphobia"	                  "aibohphobia"
string:
"My dad is a racecar athlete"	  "a racecar a" */
function longestPalindrome (string) {
	  //var str=string.split('')
  var longestpal = ""
  for (var i = 0; i < string.length; i++) {
  for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        var str= string.slice(i, j + 1);
        if (str === str.split("").reverse().join("")) {
          if (str.length > longestpal.length) {
              longestpal = str;
          }
        }}
    }}
      
  return longestpal;
}