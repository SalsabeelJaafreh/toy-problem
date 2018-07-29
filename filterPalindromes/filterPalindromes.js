//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]




function filterPalindromes (words) {
  // Write your code here, and
  // return your final answer.
  var array = [] ;
  var ispalin = false ;
      for ( var i = 0 ; i < words.length ; i++ ){
        var temp =words[i].replace(" ")

      for ( var x = 0 ; x < temp.length ; x++ ){
      for(var k=temp.length-1;k>=0;k--){
         if (temp[x].toLowerCase() === temp[k].toLowerCase())
         {
         ispalin = true;
         }

        else {
        ispalin = false;
            }
         }
     } 
    if(ispalin === true){
      array.push(words[i])
    }
  }
  return array
  
}