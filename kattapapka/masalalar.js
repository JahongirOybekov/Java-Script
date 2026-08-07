// 1-topshiriq (flat)
// Ichma-ich joylashgan [1, [2, [3, [4, 5]]], 6] massivini to'liq (Infinity chuqurlikda) tekislang.
// console.log([1, [2, [3, [4, 5]]], 6].flat(Infinity))

// const nestedArray = [1, [2, [3, [4, 5]]], 6];
// const flattenedArray = nestedArray.flat(Infinity);

// console.log(flattenedArray);

// 2-topshiriq (push)
// Bo'sh "savat" massivi yarating. Foydalanuvchi tanlagan 3 ta mahsulot nomini (o'zingiz kiriting)
// push() yordamida qo'shing va oxirida savatdagi mahsulotlar sonini chop eting.
// let mahsulotlar = ['karam']
// let mahsulot;
// while (mahsulotlar.length < 3) {
//    mahsulot = prompt("Mahsulot nomini kiriting!: ")
//    mahsulotlar.push(mahsulot)
// }
// console.log(mahsulotlar)

// 3-topshiriq (findIndex)
// let talabalar = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}];
// Balli 50 dan past bo'lgan birinchi talabaning indeksini findIndex() bilan toping.

// let talabalar = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}]
// console.log(talabalar.findIndex((n) => n.ball < 50))

// 3-topshiriq (findIndex)
// let talabalar = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}];
// Balli 50 dan past bo'lgan birinchi talabaning indeksini findIndex() bilan toping.

// let talabalar = [{ism:"Ali", ball:75}, {ism:"Vali", ball:40}, {ism:"Guli", ball:90}]
// console.log(talabalar.findIndex((n) => n.ball < 50))

//  5-topshiriq (keys)
// let mevalar = ["olma", "nok", "shaftoli", "gilos"];
// keys() yordamida faqat juft indekslarni (0, 2, ...) konsolga chiqaring.

// let mevalar = ["olma", "nok", "shaftoli", "gilos"];
// for (let i of mevalar.keys()) {
//    if (i % 2 == 0) {
//       console.log(i)
//    }
// }

// 6-topshiriq (pop)
// let stack = [];
// push() yordamida stackga 1,2,3,4,5 sonlarini qo'shing, so'ng pop() bilan ketma-ket 3 ta elementni
// olib, ularning yig'indisini chop eting.

// let stack = [];
// let popStack = [];
// for (let i = 1; i <= 5; i++) {
//    stack.push(i);
// }
// for (let i = 0; i < 3; i++) {
//    console.log(i)
//    popStack.push(stack.pop())
// }
// console.log(`Jami stack da (${stack}) lar qoldi`)
// console.log(`Olib tashlangan mahsulotlar (${popStack.reverse()})`)

// 7-topshiriq (reduceRight)
// let arr = ["JS", "dan", "salom"];
// reduceRight() yordamida so'zlarni to'g'ri tartibda birlashtirib "salom dan JS" ko'rinishidagi
// jumlani hosil qiling.

// let arr = ["dan", "JS", "Salom"];
// let result = arr.reduceRight((acc, word) => acc + " " + word);
// console.log(result);

// 8-topshiriq (unshift)
// let navbat = ["Vali", "Guli"];
// Navbatga eng oldinga "Ali" ismini unshift() bilan qo'shing va yangi navbat uzunligini chop eting.

// let navbat = ["Vali", "Guli"];
// let yangiUzunlik = navbat.unshift("Ali");
// console.log(navbat);      
// console.log(yangiUzunlik); 

// 9-topshiriq (values)
// let sonlar = [4, 8, 15, 16, 23, 42];
// values() iteratorini for...of bilan aylanib, faqat 10 dan katta sonlarni konsolga chiqaring.

// let sonlar = [4, 8, 15, 16, 23, 42];
// for (let son of sonlar.values()) {
//   if (son > 10) console.log(son);
// }

// 10-topshiriq (findLast)
// let sonlar = [12, 5, 8, 21, 3, 17];
// findLast() yordamida oxirgi juft sonni toping.

// let sonlar = [12, 5, 8, 21, 3, 17];
// let oxirgiJuft = sonlar.findLast(son => son % 2 === 0);
// console.log(oxirgiJuft);


// 11-topshiriq (forEach)
// let narxlar = [1000, 2500, 3200, 4700];
// forEach() yordamida har bir narxga 15% QQS qo'shib, natijani "Narx: XXXX so'm" formatida chop eting
// (asl massivni o'zgartirmasdan).

// let narxlar = [1000, 2500, 3200, 4700];
// narxlar.forEach((son, i) => {
//    console.log(`${i}-indeksdagi mahsulot narxi ${son*15/100+son} so'm`)
// })

// 12-topshiriq (indexOf)
// let harflar = ["a", "b", "c", "b", "d", "b"];
// "b" harfi massivda nechta marta uchrashini indexOf() dan foydalanib (tsikl yordamida) sanang.

// let harflar = ["a", "b", "c", "b", "d", "b"];
// let index = harflar.indexOf("b");
// let soni = 0;
// while (index !== -1) {
//   soni++;
//   index = harflar.indexOf("b", index + 1); // Qidiruvni keyingi pozitsiyadan davom ettiradi
// }
// console.log(soni); 


// 13-topshiriq (map)
// let temperaturalar = [0, 20, 37, 100];
// map() yordamida Selsiy darajalarini Farengeytga o'tkazing: F = C * 9/5 + 32.

// let temperaturalar = [0, 20, 37, 100];
// let farengeyt = temperaturalar.map(c => c * 9/5 + 32);
// console.log(farengeyt);


// 14-topshiriq (shift)
// let navbat = ["mijoz1", "mijoz2", "mijoz3", "mijoz4"];
// while tsikli yordamida navbatdagi barcha mijozlarni shift() bilan xizmat ko'rsatish tartibida
// konsolga chiqaring ("mijoz1 xizmat ko'rmoqda" kabi).

// let navbat = ["mijoz1", "mijoz2", "mijoz3", "mijoz4"];
// while (navbat.length > 0) {
//   let mijoz = navbat.shift();
//   console.log(`${mijoz} xizmat ko'rmoqda`);
// }


// 15-topshiriq (entries)
// let taomlar = ["osh", "manti", "lag'mon"];
// entries() yordamida har bir taomni "1-taom: osh" formatida chop eting (indeks 1 dan boshlansin).

// let taomlar = ["osh", "manti", "lag'mon"];
// for (let [index, taom] of taomlar.entries()) {
//   console.log(`${index + 1}-taom: ${taom}`);
// }


// 16-topshiriq (lastIndexOf)
// let harakatlar = ["login", "click", "scroll", "click", "logout", "click"];
// "click" harakati oxirgi marta qaysi indeksda sodir bo'lganini toping.

// let harakatlar = ["login", "click", "scroll", "click", "logout", "click"];
// let oxirgiIndeks = harakatlar.lastIndexOf("click");
// console.log(oxirgiIndeks);


// 17-topshiriq (filter)
// let foydalanuvchilar = [{ism:"Ali", faol:true}, {ism:"Vali", faol:false}, {ism:"Guli", faol:true}];
// Faqat faol foydalanuvchilarning ismlaridan iborat yangi massiv hosil qiling (filter + map birga).

// let foydalanuvchilar = [{ism:"Ali", faol:true}, {ism:"Vali", faol:false}, {ism:"Guli", faol:true}];
// let faolIsmlar = foydalanuvchilar.filter(f => f.faol).map(f => f.ism);
// console.log(faolIsmlar);


// 18-topshiriq (findLastIndex)
// let baholar = [3, 5, 2, 4, 5, 1];
// findLastIndex() yordamida oxirgi "5" bahoning indeksini toping.

// let baholar =[3, 5, 2, 4, 5, 1];
// let oxirgiBahoIndeks = baholar.findLastIndex(baho => baho === 5);
// console.log(oxirgiBahoIndeks); 


// 19-topshiriq (reduce)
// let savat = [{nom:"non", narx:5000, soni:2}, {nom:"sut", narx:8000, soni:1}];
// reduce() yordamida savatning umumiy summasini (narx * soni) hisoblang.

// let savat = [{nom:"non", narx:5000, soni:2}, {nom:"sut", narx:8000, soni:1}];
// let umumiySumma = savat.reduce((sum, mahsulot) => sum + (mahsulot.narx * mahsulot.soni), 0);
// console.log(umumiySumma);


// 20-topshiriq (find)
// let sonlar = [2, 4, 6, 7, 8, 10];
// Massivdagi birinchi toq sonni find() yordamida toping. Agar toq son bo'lmasa "Topilmadi" deb chop eting.

// let sonlar =[2, 4, 6, 7, 8, 10];
// let toqSon = sonlar.find(son => son % 2 !== 0);
// console.log(toqSon !== undefined ? toqSon : "Topilmadi"); 


// 21-topshiriq (flat)
// let baholar = [[85, 90], [70, [60, 65]], [95]];
// Massivni 2 daraja chuqurlikda tekislab, so'ng barcha baholarning o'rtachasini hisoblang.

// let baholar = [[85, 90], [70, [60, 65]], [95]];
// let tekis = baholar.flat(2);
// let yigindi = 0;
// for (let b of tekis) {
//   yigindi += b;
// }
// let ortacha = yigindi / tekis.length;
// console.log(ortacha);

// 22-topshiriq (push)
// let jurnalar = ["Fizika: 4"];
// Massivga forEach() yordamida ["Matematika: 5", "Kimyo: 3"] massividagi elementlarni push() bilan
// birma-bir qo'shing.

// let jurnalar = ["Fizika: 4"];
// let yangiFanlar = ["Matematika: 5", "Kimyo: 3"];
// yangiFanlar.forEach(fan => jurnalar.push(fan));
// console.log(jurnalar);


// 23-topshiriq (findIndex)
// let mahsulotlar = [{nom:"stol", narx:150000}, {nom:"stul", narx:45000}, {nom:"shkaf", narx:300000}];
// Narxi 100000 dan qimmat bo'lgan birinchi mahsulotning indeksini toping va shu mahsulotni
// massivdan o'chirib tashlang (splice bilan).

// let mahsulotlar = [{nom:"stol", narx:150000}, {nom:"stul", narx:45000}, {nom:"shkaf", narx:300000}];
// let index = mahsulotlar.findIndex(m => m.narx > 100000);
// if (index !== -1) {
//   mahsulotlar.splice(index, 1);
// }
// console.log(mahsulotlar);


// 24-topshiriq (splice)
// let arr = [1, 2, 3, 4, 5, 6, 7];
// splice() yordamida massivning o'rtasidagi elementni (indeksni hisoblab) o'chirmasdan, faqat
// o'sha joyga 99 sonini qo'shing (deleteCount = 0 bilan).

// let arr =[1, 2, 3, 4, 5, 6, 7];
// let ortachaIndeks = Math.floor(arr.length / 2);
// arr.splice(ortachaIndeks, 0, 99);
// console.log(arr);


// 25-topshiriq (keys)
// let harflar = ["x", "y", "z"];
// keys() dan foydalanib teskari tartibda (2, 1, 0) indekslarni chop eting.

// let harflar = ["x", "y", "z"];
// let indekslar = [...harflar.keys()].reverse();
// for (let index of indekslar) {
//   console.log(index);
// }


// 26-topshiriq (pop)
// let sahifalar = ["bosh", "biz-haqimizda", "xizmatlar", "aloqa"];
// Foydalanuvchi "orqaga" tugmasini bossa oxirgi sahifa pop() bilan olib tashlanadi. Buni 2 marta
// simulyatsiya qiling va qolgan sahifalarni chop eting.

// let sahifalar = ["bosh", "biz-haqimizda", "xizmatlar", "aloqa"];
// sahifalar.pop(); 
// sahifalar.pop(); 
// console.log(sahifalar); 


// 27-topshiriq (reduceRight)
// let sonlar = [1, 2, 3, 4];
// reduceRight() yordamida sonlarni chapdan o'ngga emas, o'ngdan chapga qarab bo'lish (division)
// amalini bajaring va natijani chop eting.

// let sonlar =[1, 2, 3, 4];
// let natija = sonlar.reduceRight((acc, son) => acc / son);
// console.log(natija);


// 28-topshiriq (unshift)
// let vazifalar = ["hujjatlarni tayyorlash"];
// "Eng muhim: byudjetni tasdiqlash" vazifasini ro'yxat boshiga unshift() bilan qo'shing, so'ng
// barcha vazifalarni raqamlab chop eting.

// let vazifalar = ["hujjatlarni tayyorlash"];
// vazifalar.unshift("Eng muhim: byudjetni tasdiqlash");
// vazifalar.forEach((vazifa, index) => {
//   console.log(`${index + 1}. ${vazifa}`);
// });


// 29-topshiriq (values)
// let ballar = [55, 70, 43, 88, 91];
// values() iteratori yordamida o'tish balli (60) dan past bo'lgan ballar sonini sanang.

// let ballar =[55, 70, 43, 88, 91];
// let pastBallarSoni = 0;
// for (let ball of ballar.values()) {
//   if (ball < 60) pastBallarSoni++;
// }
// console.log(pastBallarSoni);


// 30-topshiriq (findLast)
// let tranzaksiyalar = [200, -50, 300, -120, 400, -30];
// findLast() yordamida oxirgi manfiy (xarajat) tranzaksiyani toping.

// let tranzaksiyalar = [200, -50, 300, -120, 400, -30];
// let oxirgiManfiy = tranzaksiyalar.findLast(t => t < 0);
// console.log(oxirgiManfiy);


// 31-topshiriq (forEach)
// let harorat = [18, 22, 25, 30, 15];
// forEach() yordamida har bir kun uchun "Kun X: issiq/salqin" deb chiqaring (25 va undan yuqori — issiq).

// let harorat =[18, 22, 25, 30, 15];
// harorat.forEach((t, i) => {
//   let holat = t >= 25 ? "issiq" : "salqin";
//   console.log(`Kun ${i + 1}: ${holat}`);
// });


// 32-topshiriq (indexOf)
// let ranglar = ["qizil", "yashil", "ko'k"];
// "sariq" rangi massivda bor-yo'qligini indexOf() orqali tekshirib, natijaga qarab tegishli xabar chiqaring.

// let ranglar = ["qizil", "yashil", "ko'k"];
// let index = ranglar.indexOf("sariq");
// console.log(index !== -1 ? "Sariq rangi massivda bor" : "Sariq rangi massivda yo'q");


// 33-topshiriq (map)
// let ismlar = ["ali", "vali", "guli"];
// map() yordamida har bir ismning birinchi harfini katta qilib qolganini kichik holda qoldiring
// (masalan "ali" -> "Ali").

// let ismlar = ["ali", "vali", "guli"];
// let formatlanganIsmlar = ismlar.map(ism => ism[0].toUpperCase() + ism.slice(1).toLowerCase());
// console.log(formatlanganIsmlar);


// 34-topshiriq (shift)
// let printerNavbat = ["hujjat1.pdf", "hujjat2.pdf", "hujjat3.pdf"];
// shift() yordamida navbatdagi birinchi hujjatni chop qilib (konsolga chiqarib), uni navbatdan olib tashlang.
// Qolgan navbat uzunligini ham chiqaring.

// let printerNavbat = ["hujjat1.pdf", "hujjat2.pdf", "hujjat3.pdf"];
// let chopEtildi = printerNavbat.shift();
// console.log(`Chop etildi: ${chopEtildi}`); 
// console.log(`Qolgan navbat uzunligi: ${printerNavbat.length}`);


// 35-topshiriq (entries)
// let sotuvlar = [1200, 3400, 800];
// entries() yordamida eng katta qiymatga ega indeksni (qo'lda taqqoslab) aniqlang.

// let sotuvlar =[1200, 3400, 800];
// let maxIndeks = 0;
// for (let [index, qiymat] of sotuvlar.entries()) {
//   if (qiymat > sotuvlar[maxIndeks]) maxIndeks = index;
// }
// console.log(maxIndeks);


// 36-topshiriq (lastIndexOf)
// let harakatlar = [0, 1, 0, 0, 1, 0, 1];
// Oxirgi "1" raqami qaysi pozitsiyada turganini lastIndexOf() bilan aniqlang va shu pozitsiyadan
// keyingi barcha elementlarni slice() bilan ajratib chop eting.

// let harakatlar =[0, 1, 0, 0, 1, 0, 1];
// let oxirgiIndeks = harakatlar.lastIndexOf(1);
// let natija = harakatlar.slice(oxirgiIndeks + 1);
// console.log(natija);


// 37-topshiriq (filter)
// let sonlar = [12, 5, 8, 130, 44, 3, 99];
// filter() yordamida faqat 2 xonali sonlardan iborat yangi massiv hosil qiling.

// let sonlar =[12, 5, 8, 130, 44, 3, 99];
// let ikkiXonali = sonlar.filter(son => son >= 10 && son <= 99);
// console.log(ikkiXonali);


// 38-topshiriq (findLastIndex)
// let logNooma = ["info", "error", "info", "error", "warning"];
// findLastIndex() yordamida oxirgi "error" yozuvining indeksini toping va undan keyingi barcha
// yozuvlarni chop eting.

// let logNooma = ["info", "error", "info", "error", "warning"];
// let oxirgiErrorIndex = logNooma.findLastIndex(log => log === "error");
// let keyingiLoglar = logNooma.slice(oxirgiErrorIndex + 1);
// console.log(keyingiLoglar); 



// 39-topshiriq (reduce)
// let sozlar = ["JavaScript", "massiv", "metodlari"];
// reduce() yordamida barcha so'zlardagi umumiy harflar sonini hisoblang.

// let sozlar = ["JavaScript", "massiv", "metodlari"];
// let jamiHarflar = sozlar.reduce((sum, soz) => sum + soz.length, 0);
// console.log(jamiHarflar); 


// 40-topshiriq (find)
// let ishchilar = [{ism:"Bek", staj:2}, {ism:"Anvar", staj:7}, {ism:"Dilnoza", staj:5}];
// Staji 5 yildan ko'p bo'lgan birinchi ishchini find() yordamida toping.

// let ishchilar = [{ism:"Bek", staj:2}, {ism:"Anvar", staj:7}, {ism:"Dilnoza", staj:5}];
// let tajribaliIshchi = ishchilar.find(ishchi => ishchi.staj > 5);
// console.log(tajribaliIshchi);


// 41-topshiriq (flat)
// let matritsa = [[1,2,3],[4,5,6],[7,8,9]];
// flat() yordamida matritsani bir qatorli massivga aylantirib, reduce() bilan yig'indisini toping.

// let matritsa = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let birQatorliMassiv = matritsa.flat(Infinity);
// let yigindi = birQatorliMassiv.reduce((acc, i) => acc + i, 0);
// console.log(birQatorliMassiv);
// console.log(yigindi);


// 42-topshiriq (push)
// let log = [];
// 1 dan 20 gacha bo'lgan sonlar orasidan faqat 3 ga bo'linadiganlarini push() bilan log massiviga qo'shing.

// let log = [];
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     log.push(i);
//   }
// }
// console.log(log);


// 43-topshiriq (findIndex)
// let parollar = ["12345", "qwerty", "Str0ng!Pass", "abcdef"];
// Uzunligi 8 dan katta bo'lgan birinchi parolning indeksini findIndex() bilan toping.

// let parollar = ["12345", "qwerty", "Str0ng!Pass", "abcdef"];
// let index = parollar.findIndex(parol => parol.length > 8);
// console.log(index);


// 44-topshiriq (splice)
// let hafta = ["Dush", "Sesh", "Chor", "Pay", "Juma", "Shan", "Yak"];
// splice() yordamida ish kunlarini (Dush-Juma) dam olish kunlaridan (Shan-Yak) alohida
// massivlarga ajrating (asl massivni o'zgartirib).

// let hafta = ["Dush", "Sesh", "Chor", "Pay", "Juma", "Shan", "Yak"];
// let damOlishKunlari = hafta.splice(5);
// console.log(hafta);            
// console.log(damOlishKunlari); 


// 45-topshiriq (keys)
// let arr = ["a", "b", "c", "d", "e"];
// keys() iteratorini array ga aylantirib (Array.from), teskari tartibda chop eting.

// let arr = ["a", "b", "c", "d", "e"];
// let indekslar = Array.from(arr.keys()).reverse();
// console.log(indekslar);


// 46-topshiriq (pop)
// let tarix = ["sahifa1", "sahifa2", "sahifa3"];
// Brauzer tarixi kabi: pop() bilan oxirgi sahifani oling va uni "joriy sahifa" deb chop eting;
// agar massiv bo'sh bo'lib qolsa "Tarix bo'sh" deb chiqaring.

// let tarix = ["sahifa1", "sahifa2", "sahifa3"];
// let joriySahifa = tarix.pop();
// console.log(`Joriy sahifa: ${joriySahifa}`); 
// if (tarix.length === 0) console.log("Tarix bo'sh");


// 47-topshiriq (reduceRight)
// let bosqichlar = ["boshlash", "tekshirish", "yakunlash"];
// reduceRight() yordamida bosqichlarni " <- " belgisi bilan teskari tartibda birlashtiring.

// let bosqichlar = ["boshlash", "tekshirish", "yakunlash"];
// let natija = bosqichlar.reduceRight((acc, b) => acc + " <- " + b);
// console.log(natija);


// 48-topshiriq (unshift)
// let yutuqlar = ["2-o'rin"];
// unshift() yordamida "1-o'rin" yutug'ini ro'yxat boshiga qo'shing, so'ng massiv uzunligini
// tekshirib "Yutuqlar soni: X" deb chop eting.

// let yutuqlar = ["2-o'rin"];
// yutuqlar.unshift("1-o'rin");
// console.log(`Yutuqlar soni: ${yutuqlar.length}`);


// 49-topshiriq (values)
// let baholar = [2, 3, 4, 5];
// values() yordamida barcha baholarning ko'paytmasini hisoblang (tsikl bilan).

// let baholar =[2, 3, 4, 5];
// let kopaytma = 1;
// for (let baho of baholar.values()) {
//   kopaytma *= baho;
// }
// console.log(kopaytma);


// 50-topshiriq (findLast)
// let sonlar = [3, 15, 8, 21, 6, 9];
// findLast() yordamida 5 ga qoldiqsiz bo'linadigan oxirgi sonni toping.

let sonlar =[3, 15, 8, 21, 6, 9];
let oxirgiBeshgaBolinadigan = sonlar.findLast(son => son % 5 === 0);
console.log(oxirgiBeshgaBolinadigan);


