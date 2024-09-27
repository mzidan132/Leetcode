
function longestPalindrome(s) {
    const substrings = [];

    // Outer loop for the starting index of the substring
    for (let i = 0; i < s.length; i++) {
        // Inner loop for the ending index of the substring
        for (let j = i + 1; j <= s.length; j++) {
            substrings.push(s.slice(i, j)); // Extract substring from index i to j
        }
    }
   
    const ary = [];
    const palindrome = []
    substrings.forEach(word => {
        let str = word.toString()
        let spt = str.split('').reverse()
        let jon = spt.join('')
        if(word===jon){
           ary.push(word.length)
           palindrome.push(word)
        }
        })
    const len = Math.max(...ary)
    for(let i=0;i<palindrome.length;i++){
        if(palindrome[i].length===len){
            return palindrome[i]
             break
        }
    }
    }

let str = "cbbd";
console.log(longestPalindrome(str));