let str = "masai";
let newstr="";
  
for(i=str.length-1;i>=0;i--){
    
    newstr = newstr + str[i]
}
if ( str==newstr){
    console.log("Yes");
} else {
    console.log("No")
}