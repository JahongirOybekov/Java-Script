// 1-topshiriq Berilgan matnni barcha harflarini katta harflarga o'zgartiring.
// Input: "salom dunyo"
// Kutilyotgan natija: "SALOM DUNYO"

// let matn = "salom dunyo";
// let natija = matn.toUpperCase();
// console.log(natija);


// 2-topshiriq Berilgan matnning uzunligini toping.
// Input: "JavaScript"
// Kutilyotgan natija: 10

// let inputStr = "JavaScript";
// let uzunlik = inputStr.length;
// console.log(uzunlik); 


// 3-topshiriq Berilgan matnning 5-indeksidagi belgini qaytaring.
// Input: "Dasturlash"
// Kutilyotgan natija: "r"

// let inputStr = "Dasturlash";
// let natija = inputStr[5];
// console.log(natija);


// 4-topshiriq Berilgan matn "Hello" so'zi bilan boshlanishini tekshiring.
// Input: "Hello world"
// Kutilyotgan natija: true

// let inputStr = "Hello world";
// let natija = inputStr.startsWith("Hello");
// console.log(natija); 


// 5-topshiriq Berilgan matnni barcha harflarini kichik harflarga o'zgartiring.
// Input: "WEB DASTURLASH"
// Kutilyotgan natija: "web dasturlash"

// let inputStr = "WEB DASTURLASH";
// let rezultat = inputStr.toLowerCase();
// console.log(rezultat);


// 6-topshiriq Berilgan matnning 3-indeksidagi belgini charAt() yordamida oling.
// Input: "Kompyuter"
// Kutilyotgan natija: "p"

// let inputStr = "Kompyuter";
// let natija = inputStr[3];
// console.log(natija);


// 7-topshiriq Berilgan matndagi bo'shliqlarni olib tashlang (trim).
// Input: "   Salom   "
// Kutilyotgan natija: "Salom"

// let inputStr = "   Salom   ";
// let resultStr = inputStr.trim();
// console.log(resultStr);


// 8-topshiriq Berilgan matn "!" bilan tugashini tekshiring.
// Input: "Assalomu alaykum!"
// Kutilyotgan natija: true

// let inputStr = "Assalomu alaykum!";
// let natija = inputStr.endsWith("!");
// console.log(natija);


// 9-topshiriq Berilgan matn ichida "js" so'zi borligini tekshiring.
// Input: "Men js o'rganyapman"
// Kutilyotgan natija: true

// let inputStr = "Men js o'rganyapman";
// let natija = inputStr.includes("js");
// console.log(natija);


// 10-topshiriq Berilgan matnni 3 marta takrorlang.
// Input: "ha"
// Kutilyotgan natija: "hahaha"

// let inputStr = "ha";
// let natija = inputStr.repeat(3);
// console.log(natija);


// ===================================================
// 2. O'RTACHA TOPSHIRIQLAR (30 ta)
// ===================================================

// 11-topshiriq Berilgan ism va familiyani birlashtirib, to'liq ism hosil qiling.
// Input: "Ali", "Karimov"
// Kutilyotgan natija: "Ali Karimov"

// let ism = "Ali";
// let familiya = "Karimov";
// let toliqIsm = `${ism} ${familiya}`;
// console.log(toliqIsm);


// 12-topshiriq Berilgan matnning birinchi harfini katta qiling.
// Input: "javascript"
// Kutilyotgan natija: "Javascript"

// let inputStr = "javascript";
// let natija = inputStr[0].toUpperCase() + inputStr.slice(1);
// console.log(natija);


// 13-topshiriq Berilgan matnni so'zlarga ajrating (bo'shliq bo'yicha).
// Input: "Men dastur yozaman"
// Kutilyotgan natija: ["Men", "dastur", "yozaman"]

// let matn = prompt("Gapingizni yozing: ")
// console.log(matn.split("men dastur yozaman"))


// 14-topshiriq Berilgan matndagi barcha "a" harflarini "o" ga almashtiring.
// Input: "salom"
// Kutilyotgan natija: "solom"

// let inputStr = "salom";
// let natija = inputStr.replaceAll("a", "o");
// console.log(natija);


// 15-topshiriq Berilgan matnning oxirgi 4 ta belgisini oling.
// Input: "Dasturlash"
// Kutilyotgan natija: "lash"

// let inputStr = "Dasturlash";
// let natija = inputStr.slice(-4);
// console.log(natija);


// 16-topshiriq Berilgan matndan "world" so'zini kesib oling.
// Input: "Hello world"
// Kutilyotgan natija: "world"

// let inputStr = "Hello world";
// let natija = inputStr.slice(6);
// console.log(natija); 


// 17-topshiriq Berilgan emaildan @ belgisidan keyingi qismni oling.
// Input: "ali@gmail.com"
// Kutilyotgan natija: "gmail.com"

// let email = "ali@gmail.com";
// let atIndex = email.indexOf("@");
// let gmail = email.slice(atIndex + 1);
// console.log(gmail);


// 18-topshiriq Berilgan matnni teskari tartibda yozing.
// Input: "JavaScript"
// Kutilyotgan natija: "tpircSavaJ"

// 19-topshiriq Berilgan matnning uzunligi 10 dan katta yoki kichikligini tekshiring.
// Input: "Dasturlash"
// Kutilyotgan natija: false

// 20-topshiriq Berilgan matndagi "olma" so'zini "anor" ga almashtiring.
// Input: "Men olma yedim"
// Kutilyotgan natija: "Men anor yedim"

// let arr = "Men olma yedim"
// console.log(arr.replaceAll("olma", "anor"));


// 2.11. Berilgan matndagi barcha raqamlarni toping.
// Input: "Narx: 15000 so'm"
// Kutilyotgan natija: ["15000"]

// let matn = "Narx: 15000 so'm";
// let raqamlar = matn.match(/\d+/g);
// console.log(raqamlar);


// 2.12. Berilgan matnni array elementlaridan birlashtiring.
// Input: ["Men", "o'qiyman"], " "
// Kutilyotgan natija: "Men o'qiyman"

// let sozlar = ["Men", "o'qiyman"];
// let gap = sozlar.join(" ");
// console.log(gap);


// 2.13. Berilgan matnning 2-indeksidan 6-indeksigacha bo'lgan qismini oling.
// Input: "Dasturlash"
// Kutilyotgan natija: "sturl"

// let arr = "Dasturlash"
// console.log(arr.slice("2", "7"));


// 2.14. Berilgan matn faqat harflardan iboratligini tekshiring.
// Input: "Salom123"
// Kutilyotgan natija: false

// let matn = "Salom123";
// let natija = /^[A-Za-z]+$/.test(matn);
// console.log(natija);


// 2.15. Berilgan matnning boshidagi va oxiridagi bo'shliqlarni olib tashlang.
// Input: "   JavaScript   "
// Kutilyotgan natija: "JavaScript"

// let arr = "   JavaScript   "
// console.log(arr.trim());


// 2.16. Berilgan fayl nomining kengaytmasini oling.
// Input: "document.pdf"
// Kutilyotgan natija: "pdf"

// let arr = "document.pdf"
// console.log(arr.slice(9));


// 2.17. Berilgan matnni "*" belgisi bilan 10 ta belgigacha to'ldiring (chapdan).
// Input: "abc"
// Kutilyotgan natija: "*******abc"

// let arr = "abc"
// console.log("abc".padStart(10, "*"));


// 2.18. Berilgan matn ichida "JS" so'zi nechanchi indeksda joylashganini toping.
// Input: "Men JS o'rganyapman"
// Kutilyotgan natija: 4

// let arr =  "Men JS o'rganyapman"
// console.log(arr.lastIndexOf("JS"));


// 2.19. Berilgan matndagi barcha probellarni vergulga almashtiring.
// Input: "bir ikk uch"
// Kutilyotgan natija: "bir,ikk,uch"

// let arr = "bir ikk uch"
// console.log(arr.replaceAll(" ", ","));


// 2.20. Berilgan matnning har bir belgisini alohida array elementiga aylantiring.
// Input: "salom"
// Kutilyotgan natija: ["s","a","l","o","m"]

// let arr = "salom"
// console.log(arr.split(""));


// 2.21. Berilgan matn "https://" bilan boshlanishini tekshiring.
// Input: "https://google.com"
// Kutilyotgan natija: true

// let arr =  "https://google.com"
// console.log(arr.startsWith("https://"));


// 2.22. Berilgan matnni kichik harflarga o'tkazib, probellarni "-" ga almashtiring.
// Input: "Mening Blog Postim"
// Kutilyotgan natija: "mening-blog-postim"

// let arr = "Mening Blog Postim"
// console.log(arr.toLowerCase().replaceAll(" ", "-"));


// 2.23. Berilgan matnni slice va substring yordamida kesib oling va farqini tushuntiring.
// Input: "JavaScript", index 0 dan 4 gacha
// Kutilyotgan natija: slice: "Java", substring: "Java"

// let arr = "JavaScript"
// let natija = arr.slice("0", "4")
// let natija1 = arr.substring("0", "4") 
// console.log("slice:", natija);
// console.log("substring:", natija1);


// 2.24. Berilgan matnni " " bo'yicha ajratib, so'zlar sonini toping.
// Input: "Bu bir gap"
// Kutilyotgan natija: 3

// let arr = "Bu bir gap"
// console.log(arr.split(" ").length);


// 2.25. Berilgan matndan faqat raqamlarni ajratib oling.
// Input: "a1b2c3"
// Kutilyotgan natija: "123"

// let matn = "a1b2c3";
// let natija = matn.replace(/\D/g, "");
// console.log(natija);


// 2.26. Berilgan matnni o'ng tomondan 5 ta belgigacha "." bilan to'ldiring.
// Input: "123"
// Kutilyotgan natija: "123.."

// let arr = "123"
// console.log(arr.padEnd("5", "."));


// 2.27. Berilgan matnning bosh harfini katta, qolganini kichik qiling.
// Input: "jAVAsCRIPT"
// Kutilyotgan natija: "Javascript"

// let matn = prompt("Matn kiriting: ")


// 2.28. Berilgan matnni teskari tartibda yozib, keyin yana teskari qiling.
// Input: "abc"
// Kutilyotgan natija: "abc"

// let matn = "abc";
// let teskari = matn.split("").reverse().join("");
// let natija = teskari.split("").reverse().join("");
// console.log(natija);


// 2.29. Berilgan matnni "a" belgisidan ajrating.
// Input: "salom"
// Kutilyotgan natija: ["s","lom"]

// let matn = "salom"
// console.log(matn.split("a"))


// 2.30. Berilgan matndagi qaysi belgi eng ko'p qatnashganini toping.
// Input: "aabbcc"
// Kutilyotgan natija: "a" yoki "b" yoki "c"

// let matn = prompt("Matn kiriting: ")
// let belgiSoni = {}
// let maksimumSoni = 0
// let engKopBelgi = ""
// for (let i of matn) {
//     belgiSoni[i] = (belgiSoni[i] || 0) + 1
//     if (belgiSoni[i] > maksimumSoni) {
//         maksimumSoni = belgiSoni[i]
//         engKopBelgi = i
//     }
// }
// console.log(`Eng kop belgi ${engKopBelgi}`)


// ===================================================
// 3. QIYINROQ TOPSHIRIQLAR (40 ta)
// ===================================================

// 3.1. Berilgan matndagi har bir so'zning birinchi harfini katta qiling.
// Input: "salom dunyo uzbekiston"
// Kutilyotgan natija: "Salom Dunyo Uzbekiston"

// let matn = "salom dunyo uzbekiston"
// let arr = matn.split(" ")
// let n = []
// for (let i of arr) {
//     n.push(i[0].toUpperCase() + i.slice(1))
// }
// console.log(n.join(" "))


// 3.2. Berilgan matnni palindrome ekanligini tekshiring.
// Input: "kiyik"
// Kutilyotgan natija: true

// let arr = "kiyik"
// let bb = arr.split("").reverse().join("")
// console.log(arr === bb);


// 3.3. Berilgan matndagi barcha unlilarni (a, e, i, o, u) olib tashlang.
// Input: "salom"
// Kutilyotgan natija: "slm"

// let matn = "salom";
// let natija = matn.replace(/[aeiou]/g, "");
// console.log(natija);


// 3.4. Berilgan matnni " " bo'yicha ajratib, so'zlarni teskari tartibda yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "yozaman dastur men"

// let arr = "men dastur yozaman"
// console.log(arr.split(" ").reverse().join(" "));


// 3.5. Berilgan matn ichidagi barcha raqamlarni topib, ularni yig'indisini hisoblang.
// Input: "a1b2c3d4"
// Kutilyotgan natija: 10

// let matn = "a1b2c3d4";
// let yigindi = 0;
// for (let i of matn.split("")) {
//   if (parseInt(i)) {
//     yigindi += parseInt(i);
//   }
// }
// console.log(yigindi);
// let raqamlar = matn.match(/\d/g)
// let yigindi = raqamlar.reduce((sum, i) => sum + Number(i), 0)
// console.log(yigindi)


// 3.6. Berilgan matnni camelCase ga o'tkazing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "menDasturYozaman"

// let matn = "men dastur yozaman";
// let natija = matn
//   .split(" ")
//   .map((soz, index) => {
//     if (index === 0) {
//       return soz.toLowerCase();
//     }
//     return soz.charAt(0).toUpperCase() + soz.slice(1).toLowerCase();
//   })
//   .join("");
// console.log(natija);


// 3.7. Berilgan matndagi takrorlangan so'zlarni toping.
// Input: "bu bu gap gap takror"
// Kutilyotgan natija: ["bu", "gap"]

// let matn = "bu bu gap gap takror";
// let sozlar = matn.split(" ");
// let sanoq = {};
// let natija = [];
// for (let soz of sozlar) {
//     sanoq[soz] = (sanoq[soz] || 0) + 1;
// }
// for (let soz in sanoq) {
//     if (sanoq[soz] > 1) {
//         natija.push(soz);
//     }
// }
// console.log(natija);


// 3.8. Berilgan matnning ichidagi barcha HTML teglarini olib tashlang.
// Input: "<h1>Salom</h1><p>Dunyo</p>"
// Kutilyotgan natija: "SalomDunyo"

// let arr = "<h1>Salom</h1><p>Dunyo</p>"
// console.log(arr.replace(/\<[^>]*\>/g, ""));


// 3.9. Berilgan matndagi har bir belgini Unicode kodiga aylantiring.
// Input: "A"
// Kutilyotgan natija: 65

// let matn = "A";
// let kod = matn.charCodeAt(0);
// console.log(kod)


// 3.10. Berilgan matndagi eng uzun so'zni toping.
// Input: "men dasturlashni o'rganyapman"
// Kutilyotgan natija: "o'rganyapman"

// let matn = "men dasturlashni o'rganyapman";
// let engUzun = matn
//   .split(" ")
//   .reduce((uzun, soz) => soz.length > uzun.length ? soz : uzun);
// console.log(engUzun)44


// 3.11. Berilgan matndagi barcha raqamlarni alohida array sifatida qaytaring.
// Input: "Men 25 yoshdaman, 2026 yil"
// Kutilyotgan natija: ["25", "2026"]

// let arr = "Men 25 yoshdaman, 2026 yil"
// let a = arr.match(/\d+/g)
// console.log(a);


// 3.12. Berilgan matnni snake_case ga o'tkazing.
// Input: "myVariableName"
// Kutilyotgan natija: "my_variable_name"

// let matn = "myVariableName";
// let snakeCase = matn.replace(/[A-Z]/g, harf => "_" + harf.toLowerCase());
// console.log(snakeCase);;


// 3.13. Berilgan matnning har bir so'zining uzunligini toping.
// Input: "men dastur yozaman"
// Kutilyotgan natija: [3, 6, 7]

// let arr = "men dastur yozaman"
// let a = arr.split(" ")
// for (let i of a) {
//     console.log(i.length);
// }


// 3.14. Berilgan matndagi probellarni olib tashlang va uzunligini toping.
// Input: "salom dunyo"
// Kutilyotgan natija: 10

// let arr = "salom dunyo"
// console.log(arr.replaceAll(" ", "").length);


// 3.15. Berilgan matnni "|" belgisi bilan ajratib, arrayga aylantiring.
// Input: "a|b|c|d"
// Kutilyotgan natija: ["a","b","c","d"]

// let arr = "a|b|c|d"
// console.log(arr.replaceAll("|", "").split(""));


// 3.16. Berilgan matndagi barcha "e" harflarini indekslarini toping.
// Input: "elephant"
// Kutilyotgan natija: [0, 3]

// let matn = "elephant";
// let indekslar = [];
// let index = matn.indexOf("e");
// while (index !== -1) {
//     indekslar.push(index);
//     index = matn.indexOf("e", index + 1);
// }
// console.log(indekslar);


// 3.17. Berilgan matnni 5 ta belgidan iborat qilib, o'ngdan "#" bilan to'ldiring.
// Input: "123"
// Kutilyotgan natija: "123##"

// let arr = "123"
// console.log(arr.padEnd("5", "#"));


// 3.18. Berilgan matnning faqat 2-va 4-indeksidagi belgilarini oling.
// Input: "JavaScript"
// Kutilyotgan natija: "vS"

// let arr = "JavaScript"
// let a = arr.charAt("2") + arr.charAt(4)
// console.log(a);


// 3.19. Berilgan matndagi barcha katta harflarni kichikka, kichiklarini kattaga o'zgartiring.
// Input: "HeLlO"
// Kutilyotgan natija: "hElLo"

// let matn = "HeLlO";
// let natija = "";
// for (let i = 0; i < matn.length; i++) {
//     if (matn[i] === matn[i].toUpperCase()) {
//         natija += matn[i].toLowerCase();
//     } else {
//         natija += matn[i].toUpperCase();
//     }
// }
// console.log(natija);


// 3.20. Berilgan matndan faqat unli harflarni ajratib oling.
// Input: "salom"
// Kutilyotgan natija: "ao"

// let matn = "salom";
// let natija = matn.match(/[aeiouo']/g).join("");
// console.log(natija);


// 3.21. Berilgan matnni " " bo'yicha ajratib, so'zlarni uzunligi bo'yicha saralang.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["men", "dastur", "yozaman"] yoki ["men", "yozaman", "dastur"]

// let arr = "men dastur yozaman"
// let a = arr.split(" ");
// console.log(a.length, a);


// 3.22. Berilgan matnni tekshirib, u faqat kichik harflardan iboratligini aniqlang.
// Input: "salom"
// Kutilyotgan natija: true

// let arr = "salom"
// console.log(arr === arr.toLowerCase());


// 3.23. Berilgan matn ichidagi barcha "a" harflarini "e" ga, "e" larni "a" ga almashtiring.
// Input: "salem"
// Kutilyotgan natija: "selam"

// let arr =  "salem"
// console.log(arr.replaceAll("e", "a").replace("a", "e"));


// 3.24. Berilgan matnni 3 ta qatorga bo'ling (har 3 belgidan).
// Input: "abcdefghi"
// Kutilyotgan natija: ["abc","def","ghi"]

// let matn = "abcdefghi";
// let natija = [];
// for (let i = 0; i < matn.length; i += 3) {
//     natija.push(matn.slice(i, i + 3));
// }
// console.log(natija);


// 3.25. Berilgan matndagi barcha raqamlarni "X" bilan almashtiring.
// Input: "Men 25 yoshdaman"
// Kutilyotgan natija: "Men XX yoshdaman"

// let arr = "Men 25 yoshdaman"
// console.log(arr.replaceAll("25", "XX"));


// 3.26. Berilgan matnning boshidan va oxiridan ma'lum belgilarni olib tashlang.
// Input: "**salom**", "*"
// Kutilyotgan natija: "salom"

// let arr = "**salom**"
// console.log(arr.slice(2, 7));


// 3.27. Berilgan matnni har bir belgisini alohida satrga yozing.
// Input: "salom"
// Kutilyotgan natija: "s\na\nl\no\nm"

// let matn = "salom";
// for (let i = 0; i < matn.length; i++) {
//   console.log(matn[i]);
// }


// 3.28. Berilgan matn ichida "javascript" so'zi necha marta qatnashganini toping.
// Input: "javascript va javascript"
// Kutilyotgan natija: 2

// let arr ="javascript va javascript"
// let a = arr.split("javascript").length -1
// console.log(a);


// 3.29. Berilgan matnni kichik harflarga o'tkazing va undagi barcha probellarni olib tashlang.
// Input: "Salom Dunyo"
// Kutilyotgan natija: "salomdunyo"

// let arr = "Salom Dunyo"
// console.log(arr.toLowerCase().replaceAll(" ", ""));


// 3.30. Berilgan matndagi barcha belgilarni o'chirib, faqat raqamlarni qoldiring.
// Input: "a1b2c3"
// Kutilyotgan natija: "123"

// let arr = "a1b2c3"
// console.log(arr.match(/\d+/g).join(""));


// 3.31. Berilgan matnni " " bo'yicha ajratib, so'zlarni alfavit bo'yicha saralang.
// Input: "banana olma uzum"
// Kutilyotgan natija: ["banana","olma","uzum"]

// let arr = "banana olma uzum"
// console.log(arr.split(" "));


// 3.32. Berilgan matnning har bir so'zidan birinchi va oxirgi harfni oling.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["mn", "dr", "yn"]

// let matn = "men dastur yozaman";
// let natija = matn
//   .split(" ")
//   .map(soz => soz[0] + soz[soz.length - 1]);
// console.log(natija);


// 3.33. Berilgan matndagi barcha probellarni sonini toping.
// Input: "salom dunyo"
// Kutilyotgan natija: 1

// let arr = "salom dunyo"
// let a = arr.split(" ").length -1
// console.log(a);


// 3.34. Berilgan matnni " " bo'yicha ajratib, har bir so'zni katta harf bilan yozing.
// Input: "salom dunyo"
// Kutilyotgan natija: "SALOM DUNYO"

// let arr = "salom dunyo"
// console.log(arr.toUpperCase());


// 3.35. Berilgan matn ichidagi barcha harflarni alifbo tartibida joylashtiring.
// Input: "cba"
// Kutilyotgan natija: "abc"

// let arr = "cba"
// let a = arr.split("").sort().join("")
// console.log(a);


// 3.36. Berilgan matnning faqat toq indekslaridagi belgilarini oling.
// Input: "salom"
// Kutilyotgan natija: "ao"

// let natija = "";
// for (let i = 1; i < matn.length; i += 2) {
//     natija += matn.charAt(i);
// }
// console.log(natija); 


// 3.37. Berilgan matndagi barcha " " belgilarini "|" ga almashtiring.
// Input: "salom dunyo"
// Kutilyotgan natija: "salom|dunyo"



// 3.38. Berilgan matnni 4 ta belgidan iborat qilib, chapdan "0" bilan to'ldiring.
// Input: "12"
// Kutilyotgan natija: "0012"

// 3.39. Berilgan matnning uzunligini hisoblang (probelsiz).
// Input: "salom dunyo"
// Kutilyotgan natija: 9

// 3.40. Berilgan matn ichidagi barcha "l" harflarini indekslarini toping.
// Input: "hello"
// Kutilyotgan natija: [2, 3]
