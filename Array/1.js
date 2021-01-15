var _ = require('lodash')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(_.chunk(arr, 3))
console.log(_.difference(arr, [1, 2, 3, 15]))
// Math.floor 向下取整   Math.ceil 向上取整   Math.round 最近取整
console.log(_.differenceBy([2.5, 5.8], [1.9, 5.9], Math.floor)) // 2.5
console.log(_.drop([1, 2, 3, 3, 4, 5, 6]))

var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

// console.log(_.dropRightWhile(users, function (o) { return !o.active; })); //[ { user: 'barney', active: true } ]
console.log(_.findIndex(users, 'active'));

console.log(_.flattenDepth([1,[2,3,[4, [5]]],[4,[5, [6]]]], 2))