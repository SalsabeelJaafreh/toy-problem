/*
Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. 
When implemented well, it can be about two or three times faster than its main competitors, 
merge sort and heapsort.
It is a comparison sort, meaning that it can sort items of any type for which a “less-than” relation is defined.
Quicksort uses these steps.
Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; 
explore the options and note their advantages.
Divide all other elements (except the pivot) into two partitions.
All elements less than the pivot must be in the first partition.
All elements greater than the pivot must be in the second partition.
Recursively apply the above process to the two partitions
Join the first sorted partition, the pivot, and the second sorted partition.
The best pivot creates partitions of equal length (or lengths differing by 1). 
The worst pivot creates an empty partition (for example, 
	if the pivot is the first or last element of a sorted array).
Extra Credit: Perform the sort in place.
Watch how at https://www.youtube.com/watch?v=ywWBy6J5gz8
NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
*/
function quickSort(arr) {
	//your code here 
   if(arr.length<=1||arr.length==0||arr===null){
    return arr;
  }

  //pivot will be the last elem in array 
  var pivot = arr[arr.length-1];
  //less will be array of all elem smaller than pivot
  var less= [];
   //greater will be array of all elem bigger than pivot
  var greater = [];
  
  for(var i=0; i<arr.length-1; i++){
    
    if(arr[i] <= pivot){
      less.push(arr[i]);
    }        
    else {
          greater.push(arr[i]);
          }
     
  }
  //sort the less array and concatenate with pivot then concatenate with sorted greater array 
  return quickSort(less).concat(pivot, quickSort(greater));
}