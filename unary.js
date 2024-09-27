let number = [2, 7, 11, 15];
let target = 9

for (let i = 0; i < number.length; i++) {
    let flag = 0
    for (let j = i + 1; j < number.length; j++) {
        let twoSum = 0;
        twoSum = number[i] + number[j]
        if (twoSum === target) {
            console.log(` ${i} and ${j} `)
            flag = 1
            break
        }
    }
    if (flag == 1) break
}


var findMedianSortedArrays = function (nums1, nums2) {
    let ary = nums1.concat(nums2)
    let number = ary.sort((a,b)=>a-b)

    if (number.length % 2 == 0) {
        const idx = number.length / 2
        return  (number[idx-1] + number[idx])/2
    }
    else {
        const idx = Math.floor(number.length / 2)
        return number[idx]
    }
}

let ary1 = [1,2,3,4,5]
let ary2 = [6,7,8,9,10,11]
let result = findMedianSortedArrays(ary1,ary2)
console.log(result)

