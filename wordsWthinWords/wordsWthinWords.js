//Words within Words
//Given an array of unique words, find the word that contains the greatest number of other words. 
//A word must be at least two letters long.
//input:
//wordList:
//[ "gray", "grays", "ray", "rays", "strays" ]	
//output:"grays"

function nestedWordCount (wordList) {
 	var str = '';
	var  greatest = 0;
	for (var i =0;i < wordList.length; i++) {
		var temp = 0;
		for (var j=0; j< wordList.length; j++) {
			if(wordList[i].includes(wordList[j])) {
		   temp++;
			}}
		if (temp > greatest) {
			greatest = temp;
			str = wordList[i];
		}
	}
	return str;
}