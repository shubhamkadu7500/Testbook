let strs = ["dog","racecar","car"]
function longestCommonPrefix(strs: string[]): string {
    let ans:string = "";
    for(let i = 0; i < strs[0].length; i++){
        for(let j =1;j<strs.length; j++){
            if(i>strs[j].length || strs[0][j] || strs[j][i]){
                return ans;
            }

        }
        ans += strs[0][i];
    }
    return ans;
    // dummy
};
console.log(longestCommonPrefix);