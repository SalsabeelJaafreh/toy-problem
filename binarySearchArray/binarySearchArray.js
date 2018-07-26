/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var min =0;
  var max =array.length;
  while(max>=min){
    var mid = Math.floor((max+min)/2);
    if(array[mid]===target){
      return indexOf(target);
    }
    else
     if(array[mid]>target){
      max--;
    }else{
      min++;
    }
  }
  return "not exist";
}

