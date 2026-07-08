1-topshiriq (flat)
// Ichma-ich joylashgan [1, [2, [3, [4, 5]]], 6] massivini to'liq (Infinity chuqurlikda) tekislang.
// console.log([1, [2, [3, [4, 5]]], 6].flat(Infinity))

let arr = [1, [2, [3, [4, 5]]], 6];
while (arr.some(Array.isArray)) arr = [].concat(...arr);
console.log(arr);