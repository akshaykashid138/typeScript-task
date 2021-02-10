var strRev=(str:string): string=>{
    var splitString = str.split("");
  
    var reverseArray = splitString.reverse(); 
 
    var joinArray = reverseArray.join(""); 
    
    
    
    return joinArray.toString(); 
}

console.log(strRev('akshay'))