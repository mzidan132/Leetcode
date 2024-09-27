var isPalindrome = function (x) {
    // Convert the number to a string, then to an array, reverse it, and join it back
    let org = x.toString();  // Convert number to string
    let rev = org.split('').reverse().join('');  // Reverse the string

    // Compare the original string with the reversed string
    return org === rev;
};

const num = 121;
const result = isPalindrome(num);
console.log(result);  // Output: true

var reverse = function (x) {
    let org = x.toString()
    let spt = org.split('')
    if (spt[0] === '-') {
        let slc = spt.slice(1)
        let rev = slc.reverse().join('')
        let str = rev.toString()
        let opt = Number(str)
        let fnl = -opt
        //let stn = opt.toString()
        //const ary = stn.split('')
        //ary.unshift('-')
        //let fnl = ary.join('')
        if (fnl < Math.pow(-2, 31) || fnl > Math.pow(2, 31) - 1) {
            return 0;
        }
        return fnl
    }
    else {
        let rev = spt.reverse().join('')
        let str = rev.toString()
        let opt = Number(str)
        if (opt < Math.pow(-2, 31) || opt > Math.pow(2, 31) - 1) {
            return 0;
        }
        return opt
    }

}
const numbr = -123
const results = reverse(numbr)
console.log(results)


function longestSubstring(s) {
    const substrings = [];

    // Outer loop for the starting index of the substring
    for (let i = 0; i < s.length; i++) {
        // Inner loop for the ending index of the substring
        for (let j = i + 1; j <= s.length; j++) {
            substrings.push(s.slice(i, j)); // Extract substring from index i to j
        }
    }

    const noDuplicates = [];

    substrings.forEach(word => {
        let hasDuplicate = false;
    
        // Loop through each character in the word
        for (let i = 0; i < word.length; i++) {
            for (let j = i + 1; j < word.length; j++) {
                if (word[i] === word[j]) {
                    hasDuplicate = true;  // Mark if duplicate is found
                    break;
                }
            }
            if (hasDuplicate) break; // Stop checking if a duplicate was found
        }
    
        // If no duplicate characters, add the word to the final array
        if (!hasDuplicate) {
            noDuplicates.push(word);
        }
    });
    const mxlen = []
    noDuplicates.forEach((element) => mxlen.push(element.length))
    let rst = Math.max(...mxlen)
    return Number(rst)

}

let str = "bbb";
console.log(longestSubstring(str));
