var _ = require('lodash');

// 数组拍平

let arr = [1, [2.4, 3, 4, [5, [6]]]]
let flattenArr = [];
helper(arr);
function helper(arr) {
    arr.forEach((item) => {
        if(Array.isArray(item)) {
            helper(item)
        } else {
            flattenArr.push(item)
        }
    })
}
console.log(flattenArr)
console.log(arr.toString().split(',').map(item => Number(item)))