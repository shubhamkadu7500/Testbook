// Palindrome (means after revese still same string appear)
// print palidromicsubstring
function isPalindrome(s:string) : boolean{
   let l =0;
   let r = s.length-1;
   while(l<r){
    if(s[l]!=s[r]){
        return false;
    }
    l++;
    r--;
   } 
   return true;
}
function palindromicSubStringPrinter(s:string){
    for(let i =0; i < s.length; i++){
        for(let j =i; j < s.length;j++){
            // we have to print the substring from i to j
            let substr = s.substring(i,j+1);
            if(isPalindrome(substr)==true){
                console.log(substr);
            }
            
        }
    }
}
// let s= "NAMAN";
let s = "abcd";
palindromicSubStringPrinter(s);
isPalindrome(s);