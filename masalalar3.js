// ==========================================================
// JAVASCRIPT FUNKSIYALAR MAVZUSIDA 100 TA AMALIY MASALA
// Daraja taqBerilgan son musbat, manfiy yoki nol eksimoti: 35 ta oson, 40 ta o'rtacha, 25 ta qiyin
// Mavzular: if-else, for, while, do-while, string, array, object
// Har bir masala funksiya ko'rinishida yechilishi kerak
// ==========================================================

// ==================== OSON DARAJA (1 - 35) ====================


// 1-masala: [if-else] Ikkita sonni parametr sifatida qabul qilib,
// ulardan kattasini qaytaruvchi funksiya yozing.
function masala1(a, b) {
    if (a > b) {
        return "a soni katta"
    } else {
        return "b son katta"
    }
}
// console.log(masala1(2, 3));


// 2-masala: [if-else] anligini
// aniqlovchi funksiya yozing. Natija: "musbat", "manfiy" yoki "nol".
function masala2(son) {
    if (son > 0) {
        return "bu musbat son"
    }
    else if (son === 0) {
        return "bu son noll"
    }
    else {
        return "bu manfiy son"
    }
}
// console.log(masala2(-2));


// 3-masala: [if-else] Berilgan yosh bo'yicha kishi "bolalik" (0-12),
// "o'smirlik" (13-17), "kattalar" (18dan katta) toifasiga tegishli ekanligini aniqlang.
function masala3(yosh) {
    if (yosh < 13) {
        return "bolalik"
    } else if (yosh >= 13 && yosh <= 17) {
        return "o'smirlik"
    }
    else {
        return "18 yoshdan katta"
    }
}
// console.log(masala3(1));


// 4-masala: [for] 1 dan berilgan songacha bo'lgan barcha sonlar yig'indisini
// hisoblovchi funksiya yozing.
function masala4(son1) {
    let son = Number(prompt("Son kiriting"))
    let yigindi = 0
    for (let i = 1; i <= son; i++) {
        yigindi += i
    }
    return yigindi
}
// console.log(masala4());


// 5-masala: [for] Berilgan sonning faktorialini hisoblovchi funksiya yozing.
function masala5(son) {
    let son1 = Number(prompt("Soni kiriting"))
    let kopaytma = 1
    for (let i = 1; i <= son; i++) {
        kopaytma *= i
    }
    return kopaytma
}
// console.log(masala5());


// 6-masala: [for] 1 dan 100 gacha bo'lgan juft sonlarni massivga
// yig'ib qaytaruvchi funksiya yozing.
function masala6() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);

        }
    }
}
// masala6()


// 7-masala: [while] Berilgan sonning raqamlar yig'indisini
// while sikli yordamida hisoblang. Masalan: 123 -> 1+2+3 = 6
function masala7(son) { }
let son = 123;
let yigindi = 0;
while (son > 0) {
    let qoldiq = son % 10; 
    yigindi += qoldiq;     
    son = Math.floor(son / 10); 
}
// console.log("Raqamlar yig'indisi:", yigindi);


// 8-masala: [while] Berilgan sondan boshlab 1 gacha teskari
// hisoblovchi (countdown) funksiya yozing, natijalarni massivga yozib qaytaring.
function masala8(son) { }
function masala8(son) {
    let natija = [];
    while (son >= 1) {
        natija.push(son); 
        son--;           
    }
    return natija;
}
// console.log(masala8(5));
// console.log(masala8(3));


// 9-masala: [do-while] Foydalanuvchidan kiritilgan son (parametr) manfiy
// bo'lmaguncha uni kamaytirib borishni simulyatsiya qiluvchi funksiya yozing
// (har safar 1 ga kamaytiring, qiymatlarni massivga saqlang).
function masala9(son) { }



// 10-masala: [do-while] 1 dan boshlab kvadratlarini hisoblab,
// natija 50 dan katta bo'lguncha davom ettiruvchi funksiya yozing.
function masala10() { }

// 11-masala: [string] Berilgan matnning uzunligini qaytaruvchi funksiya yozing.
function masala11(matn) { 
    return matn.length
    
    
}
// console.log(masala11("Salom dunyo!"));