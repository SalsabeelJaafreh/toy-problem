//Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.
//Examples


//input:[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
//output:2
//input:[ "cat", "dog", "dig", "cat" ]
//output:"cat"




function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  var c = 0
  
  for (var i = 0; i < arr.length; i++){
    c = 0
    //equal or not
    for(var j= 0; j< arr.length; j++){
      if (arr[j] === arr[i])
 c++
    }
    //even occ
    if (c%2 === 0){
      return arr[i]
    }
  }
  return null
}



