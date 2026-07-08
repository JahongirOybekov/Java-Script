// 1-topshiriq (flat)
// Ichma-ich joylashgan [1, [2, [3, [4, 5]]], 6] massivini to'liq (Infinity chuqurlikda) tekislang.
// console.log([1, [2, [3, [4, 5]]], 6].flat(Infinity))

// const nestedArray = [1, [2, [3, [4, 5]]], 6];
// const flattenedArray = nestedArray.flat(Infinity);

// console.log(flattenedArray);

// 2-topshiriq (push)
// Bo'sh "savat" massivi yarating. Foydalanuvchi tanlagan 3 ta mahsulot nomini (o'zingiz kiriting)
// push() yordamida qo'shing va oxirida savatdagi mahsulotlar sonini chop eting.
// let mahsulotlar = []
// let mahsulot;
// while (mahsulotlar.length < 3) {
//    mahsulot = prompt("Mahsulot nomini kiriting!: ")
//    mahsulotlar.push(mahsulot)
// }
// console.log(mahsulotlar)

// 11-topshiriq (forEach)
// let narxlar = [1000, 2500, 3200, 4700];
// forEach() yordamida har bir narxga 15% QQS qo'shib, natijani "Narx: XXXX so'm" formatida chop eting
// (asl massivni o'zgartirmasdan).
let narxlar = [1000, 2500, 3200, 4700];
narxlar.forEach((son, i) => {
   console.log(`${i}-indeksdagi mahsulot narxi ${son*15/100+son} so'm`)
})