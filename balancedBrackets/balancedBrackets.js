//Given a string, return true if its arrangement of parenthesis (), 
//curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
//Examples:
//Input:"(x + y) - (4)"
//output:true
//input:"(((10 ) ()) ((?)(:)))"
//output:true
//input:"[{()}]"	
//output:true
//input:"(50)("
//output:false
//input:"[{]}"	
//output:false

function isBalanced (str) {
 // Write your code here, and
  for(var i=0;i<str.length;i++){
    var count=0;
    if(str[i].includes("[")|| str[i].includes("{")||str[i].includes("(")){
      count++;
      for(var j=i+1;j<str.length;j++){
        if(str[j].includes("]")|| str[j].includes("}")||str[j].includes(")"))
        count ++;
      }
    }

}
  
 if(count==2||count==4||count==6||count==8||count==10||count==12||count==14){
   return true;
 }
 else{
   return false;
 }
};


