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
function masala9(son) {
    let natija = [];
    do {
        natija.push(son);
        son--;
    } while (son >= 0);
    return natija;
}
// console.log(masala9(3));  
// console.log(masala9(0));  
// console.log(masala9(-2));


// 10-masala: [do-while] 1 dan boshlab kvadratlarini hisoblab,
// natija 50 dan katta bo'lguncha davom ettiruvchi funksiya yozing.
function masala10() {
    let natija = [];
    let son = 1;
    let kvadrat;
    do {
        kvadrat = son * son;
        natija.push(kvadrat);
        son++;
    } while (kvadrat <= 50);
    return natija;
}
// console.log(masala10());


// 11-masala: [string] Berilgan matnning uzunligini qaytaruvchi funksiya yozing.
function masala11(matn) { }


// 12-masala: [string] Berilgan so'zni teskari tartibda qaytaruvchi funksiya yozing.
function masala12(soz) { }

// 13-masala: [string] Berilgan matnni katta harflarga o'giruvchi funksiya yozing.
function masala13(matn) { }

// 14-masala: [string] Berilgan matnda "salom" so'zi bor-yo'qligini
// tekshiruvchi funksiya yozing (true/false qaytarsin).
function masala14(matn) { }

// 15-masala: [array] Massiv elementlari yig'indisini hisoblovchi funksiya yozing.
function masala15(massiv) {
    let y = 0;
    for (let i of massiv) {
        y += i;
    }
    return y;
}
// console.log(masala15([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// 16-masala: [array] Massivdagi eng katta elementni topuvchi funksiya yozing.
function masala16(massiv) {
    let katta = massiv[0];
    for (let i of massiv) {
        if (i > katta) {
            katta = i;
        }
    }
    return katta;
}
// console.log(masala16([1, 2, 3, 4, 5]));
// console.log(masala16([-5, -2, -10]));


// 17-masala: [array] Massivdagi eng kichik elementni topuvchi funksiya yozing.
function masala17(massiv) {
    let kichik = massiv[0];
    for (let i of massiv) {
        if (i < kichik) {
            kichik = i;
        }
    }
    return kichik;
}
// console.log(masala17([4, 3, 2, 5, 6, 7, 8, 1, 0]));


// 18-masala: [array] Massiv elementlarini ikkiga ko'paytirib,
// yangi massiv qaytaruvchi funksiya yozing.
function masala18(massiv) {
    let yangiMassiv = [];

    for (let i = 0; i < massiv.length; i++) {
        yangiMassiv.push(massiv[i] * 2);
    }

    return yangiMassiv;
}

// console.log(masala18([1, 2, 3, 4, 5]));


// 19-masala: [if-else, for] Massivdagi juft sonlarni alohida
// massivga ajratuvchi funksiya yozing.
function masala19(massiv) {
    let juftlar = [];

    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] % 2 === 0) {
            juftlar.push(massiv[i]);
        }
    }
    return juftlar;
}
// console.log(masala19([1, 2, 3, 4, 5, 6, 7, 8]));


// 20-masala: [if-else, for] Massivdagi toq sonlarni alohida
// massivga ajratuvchi funksiya yozing.
function masala20(massiv) {
    let toq = []
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] % 2 !== 0) {
            toq.push(massiv[i])
        }
    }
    return toq
}
// console.log(masala20([1,2,3,4,5,6,7]));


// 21-masala: [object] Ism va yosh parametrlarini qabul qilib,
// { ism, yosh } ko'rinishida object qaytaruvchi funksiya yozing.
function masala21(ism, yosh) {
    return {
        ism: ism,
        yosh: yosh
    }
}
// console.log(masala21("Ali", 20));


// 22-masala: [object] Berilgan object ichida "ism" xususiyati
// mavjudligini tekshiruvchi funksiya yozing.
function masala22(obj) {
    return "ism" in obj
}
// console.log(masala22({ ism: "Ali", yosh: 20 }))


// 23-masala: [object] Berilgan object'dagi barcha kalitlarni (key)
// massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala23(obj) {
    return Object.keys(obj)
}
// console.log(masala23({ism: "ali", yosh: 20, kasbi: "dasturchi"}));


// 24-masala: [if-else] Berilgan sonning juft yoki toqligini
// aniqlovchi funksiya yozing.
function masala24(son) {
    if (son % 2 == 0) {
        return "Bu juft son"
    } else {
        return "BU toq son"
    }
}
// console.log(masala24(1));


// 25-masala: [if-else] Uchta sonni solishtirib, eng kattasini
// qaytaruvchi funksiya yozing.
function masala25(a, b, c) {
    if (a >= b && a >= c) {
        return a
    } else if (b >= a && b >= c) {
        return b
    } else {
        return c
    }
}
// console.log(masala25(10, 12, 20));


// 26-masala: [for] 1 dan 10 gacha ko'paytirish jadvalini
// (masalan 5 uchun: 5,10,15...) massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala26(son) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(son * i);
    }
    return arr;
}
// console.log(masala26(5))


// 27-masala: [while] Berilgan sonni 2 ga bo'lib, natija 1 dan
// kichik bo'lguncha bo'lish amalini necha marta bajarish
// mumkinligini hisoblovchi funksiya yozing.
function masala27(son) {
    let marta = 0;
    while (son >= 1) {
        son /= 2;
        marta++;
    }
    return marta;
}
// console.log(masala27(16));


// 28-masala: [string] Berilgan matndagi unli harflar (a, o, e, i, u, ...)
// sonini hisoblovchi funksiya yozing.
//* chatgpt
function masala28(matn) {
    let unli = matn.toLowerCase().match(/[aeiou]/g);
    return unli ? unli.length : 0;
}

// console.log(masala28("salom"));


// 29-masala: [string] Ikkita so'zni birlashtirib, orasiga bo'sh joy
// qo'yib qaytaruvchi funksiya yozing.
function masala29(soz1, soz2) {
    return `${soz1} ${soz2}`;
}
// console.log(masala29("salom", "dunyo"));


// 30-masala: [array] Massivda berilgan element mavjudligini
// tekshiruvchi funksiya yozing (true/false).
function masala30(massiv, element) {
    for (let i = 0; i < massiv.length; i++) {
        if (massiv[i] === element) {
            return true
        }
    }
    return false
}
// console.log(masala30([1, 2, 3, 4, 5], 8));

// 31-masala: [array] Massiv ichidagi elementlar sonini
// (uzunligini) qaytaruvchi funksiya yozing.
function masala31(massiv) {
    return massiv.length
}
// console.log(masala31("Salom"));


// 32-masala: [if-else] Berilgan baho (0-100) ga qarab harf baho
// ("A", "B", "C", "D", "F") qaytaruvchi funksiya yozing.
function masala32(baho) {
    if (baho < 0 || baho > 100 || typeof baho !== 'number') {
        return "Noto'g'ri ball kiritildi";
    } else if (baho >= 90) {
        return "A";
    } else if (baho >= 80) {
        return "B";
    } else if (baho >= 70) {
        return "C";
    } else if (baho >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(masala32(95));
console.log(masala32(82));
console.log(masala32(74));
console.log(masala32(60));
console.log(masala32(45));
console.log(masala32(105));



// 33-masala: [for] Berilgan sonning barcha bo'luvchilarini
// topib, massiv ko'rinishida qaytaruvchi funksiya yozing.
function masala33(son) {
    let natija = [];
    for (let i = 1; i <= son; i++) {
        if (son % i === 0) {
            natija.push(i);
        }
    }

    return natija;
}
// console.log(masala33(12));

// 34-masala: [do-while] 1 dan boshlab sonlarni sanab, ularning
// yig'indisi berilgan chegaradan oshguncha davom ettiruvchi
// funksiya yozing (necha ta son kerak bo'lganini qaytaring).
//* chatgpt
function masala34(chegara) { }
// 35-masala: [object] Ikkita object'ni birlashtirib, yangi
// object qaytaruvchi funksiya yozing.
function masala35(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let obj1 = { ism: "Ali", yosh: 20 };
let obj2 = { kasb: "Dasturchi", shahar: "Toshkent" };

// console.log(masala35(obj1, obj2));