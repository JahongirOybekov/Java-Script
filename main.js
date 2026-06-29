// Forsickli
// ++++++===============

// for (let boshlanishi = 0; boshlanishi <= 10; boshlanishi++) {
//     console.log(boshlanishi)
// }


// for (let boshi = 3; boshi <= 23; boshi++) {
//     console.log(boshi)
// }
// ============

// for (let i = 0; i <101; i++){
//     if (i % 2 === 0)
//         console.log(i)
// }

// for (let i = 0; i <101; i++){
//     if (i % 2 ! === 0) {
//         console.log (i)
//     }
// }

// for (let b = 0; b <= 100; b++){
//     if ( b % 5 == 0 && b % 3 == 0 ){
//         console.log(b)
//     }
// }

// 1-topshiriq

// for (let i = 0; i <= 1000; i++) {
//     let mingacha = i * i;
//     console.log( + mingacha);
// }

// 2-topshiriq

// for (let i = 1; i <= 1000; i++) {
//     if (i % 3 === 0 && i % 4 === 0) {
//         let kubi = i ** 3;
//         console.log( + kubi);
//     }
// }

// 3-topshiriq

// for (let i = 1; i <= 1000; i++) {
//     if (i % 5 === 0 && i % 2 === 0) {
//         console.log( + i);
//     }
// }


// let i = 1
// while (i <= 5){
//     console.log(i)
//     i++
// }

// let i = 1
// let opshi = 0
// while (i <= 20) {
//     console.log(i)
//     opshi += i
//     i++
// }
// console.log(opshi)
// console.log(`1dan 20 gacha bo'lgan sonlarning yig'indisi ${opshi}ga teng`)


// while



// let n = 1
// while (n < 100){
//     n *= 2
// }
// console.log(n)

// let i = 1
// while (i < 1000){
//     i *= 3
// }
// console.log(i)

// do

// let i = 0;

// do {
//     let kvadrat = i ** 2;
//     console.log(`${kvadrat}`);
//     i += 2;
// } while (i <= 100);


// let i = 1; 

// do {
//     let kub = i ** 3;
//     console.log(`${kub}`);
//     i += 2; 
// } while (i <= 100);

// 1

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

//  2

// let i = 5;

// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// 3

// let i = 0;

// do {
//   console.log("Hello");
// } while (--i > 0);

// let b = 0;

// do {
//   console.log("Hello");
// } while (--b > 0);

// let c = 0;

// do {
//   console.log("Hello");
// } while (--c > 0);

// 4

// let son;
// do {
//     son = prompt("Son kiriting:");
// } while (son != 7);

// 5

// let i = 2;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 10);

// 6

// let i = 1;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 10);

// 7

// let son = 3;
// let i = 0;
// let natija = "";

// while (i < 5) {
//     natija += son + " ";
//     i++;
// }
// console.log(natija.trim());

// 8

// let Matn;

// do {
//     Matn = prompt("Matn kiriting:");
// } while (Matn.toLowerCase() !== "stop");

// console.log("To'g'ri")

// 9







// modullar

// let names = ["Saidjon",
//     "Azamat",
//     "Suxrob",
//     "Jahongir",
//     "Shohjahon",
//     "Baxrom",
//     "Asadbek",
//     "Tursunboy",
//     "Aminboy",
//     "Bekzod",
//     "Kamronbek",
//     "Kamoladdin"]

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// for(let ozgaruvchi of names){
//     console.log(ozgaruvchi)
// }

// console.log(names[0])
// console.log(names[2])
// console.log(names[4])
// console.log(names[3])

// let massiv = new Array(4)
// let massiv0 = new Array(4, 1, 2, 3, 5)
// let massiv1 = []
// console.log(massiv)
// console.log(massiv0)
// console.log(massiv1)
// console.log(names.length)

// Array methods
// let pushMethod = names.push("oxirga qo'shiladi")
// console.log(names)


// let popMethod = names.pop("")
// console.log(names)
// console.log(popMethod)

// let unshiftMethod = names.unshift("Boshiga qo'shiladi")
// console.log(names)

// let shiftMethod = names.shift()
// console.log(names)
// console.log(shiftMethod) 

// let massiv = ;

// for (let i = 0; i < massiv.length; i++) {
//     console.log(massiv[i]);
// }

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let i = 1;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }


// let son;

// while (true) {
//     son = Number(prompt("Son kiriting (to'xtatish uchun 0 kiriting):"));
//     if (son === 0) {
//         console.log("To'g'ri");
//         break;
//     }
//     console.log("Siz kiritgan son: " + son);
// }

// let arr = ["Shohruz", 12, 46, false, true, undefined, Boolean, Number, String]
// for (let i of arr) {
//     console.log(i)
// }

// let arr = [-1, 1, 3, -12, 6, 4, -22, 6]
// let musbat = []
// for (let i of arr) {
//     if (i > 0)
//         musbat.push(i)
// }
// console.log(musbat.length)

// let yigindi = 0;

// for (let i = 1; i <= 100; i++) {
//     yigindi += i;
// }

// console.log( yigindi);


// let son = 457;
// let teskariSon = 0;

// while (son > 0) {
//     let oxirgiRaqam = son % 10;         
//     teskariSon = (teskariSon * 10) + oxirgiRaqam; 
//     son = Math.floor(son / 10);   
// }

// console.log("Teskari tartibda:", teskariSon); 


// const toqSonlar = []
// let yigindi = 0;

// for (let i = 1; i <= 50; i += 2) {
//     toqSonlar.push(i);
// }

// for (let a = 0; a < toqSonlar.length; a++) {
//     yigindi += toqSonlar[a];
// }

// console.log("1dan 50gacha bo'lgan toq sonlarni yig'indisi:", yigindi);


// const massiv =[1,2,3,4,5];

// for (let i = massiv.length - 1; i >= 0; i--) {
//     console.log(massiv[i]);
// }

// let son = parseInt(prompt("Son kiriting:")); 

// let yigindi = 0;

// if (!isNaN(son)) {

//     son = Math.abs(son);

//     while (son > 0) {
//         let qoldiq = son % 10;   
//         yigindi += qoldiq;      
//         son = Math.floor(son / 10); 
//     }

//     console.log("Kiritilgan son raqamlari yig'indisi:", yigindi);
// } else {
//     console.log("Iltimos, faqat son kiriting!");
// }

// let arr = [23, 54, 76, 54, 346, 234, 213, 12, 31, 3, 4, 5, 345, 3, 4, 53, 54];
// arr.pop()
// arr.push(1,2,3,4,5)
// arr.unshift(1,2,3,4,5)
// arr.shift()
// arr.splice(1, 15, 7);
// arr.splice(1, 15);
// arr.splice(1);
// let indeksiniQaytarish = arr.indexOf(54)
// let indeksiniQaytarish1 = arr.indexOf(545)


// console.log(indeksiniQaytarish, indeksiniQaytarish1)
// let massiv = arr.lastIndexOf(54)
// let findMetod = arr.find(i => i > 300)
// console.log(findMetod)



// 14
// const massiv = [4, -5, 0, -2, 11, -8, 7];

// let manfiySoni = 0;

// for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] < 0) {
//         manfiySoni++;
//     }
// }

// console.log("Massivdagi manfiy sonlar soni:", manfiySoni);


// 15
// for (let i = 1; i <= 15; i++) {
//     let kvadrat = i * i;
//     console.log(` ${kvadrat}`);
// }


// 16

// let son;
// do {
//     son = parseInt(prompt("Son kiriting (to'xtatish uchun -1 kiriting):"));

//     if (!isNaN(son) && son !== -1) {
//         console.log("Siz kiritgan son:", son);
//     }
// } while (son !== -1);

// console.log("Dastur to'xtatildi.");

// 17

const massiv =  [0,1,2,3,4]; 

if (massiv[2] !== undefined) {
    console.log("Massivning 2-indeksidagi element:", massiv[2]);
} else {
    console.log("Massivda 2-indeksli element mavjud emas!");
}