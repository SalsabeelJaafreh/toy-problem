/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable.
 But there are a lot of combinations!
Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on 
the phone with that number (you should return all permutations,not only English words).

Examples
Input					Output
digitString:
"0002"					[ "000A", "000B", "000C" ]
						
digitString:
"1123"					[ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords (digitString) {
    var allposs =['0','1','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
    var tel = [];
    
    
    for (var x = 0; x < allposs[digitString[0]].length; x++)//{
    for (var y = 0; y < allposs[digitString[1]].length; y++)// {
            for (var w = 0; w < allposs[digitString[2]].length; w++)//{ 
            for (var z = 0; z < allposs[digitString[3]].length; z++)//{ 
            tel.push(allposs[digitString[0]][x] + allposs[digitString[1]][y] + allposs[digitString[2]][w] + allposs[digitString[3]][z]);
    return tel;
 }
 
 //}
   //}
   //}
 //}
      
