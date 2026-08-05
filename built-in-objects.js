//^ 30 ta Topshiriqlar: Built-in Objects
// ============================================
//^ Date and Time (1-8 topshiriqlar)
// ===========================================================================

//^ 1-topshiriq Hozirgi sana va vaqtni konsolga chiqaruvchi dastur yozing.

// const hozir = new Date();
// console.log("Hozirgi sana va vaqt:", hozir.toLocaleString());

//^ 2-topshiriq Hozirgi yilni konsolga chiqaruvchi dastur yozing.

// const hozirgiVaqt = new Date();
// const joriyYil = hozirgiVaqt.getFullYear();
// console.log("Hozirgi yil:", joriyYil);

//^ 3-topshiriq Hozirgi oy raqamini (0-11 oralig'ida) konsolga chiqaruvchi dastur yozing.

// const hozirgiVaqt = new Date();
// const oyRaqami = hozirgiVaqt.getMonth();
// console.log("Hozirgi oy raqami (0-11):", oyRaqami);

//^ 4-topshiriq Hozirgi kun raqamini (1-31 oralig'ida) konsolga chiqaruvchi dastur yozing.

// const hozirgiVaqt = new Date();
// const kunRaqami = hozirgiVaqt.getDate();
// console.log("Hozirgi kun raqami (1-31):", kunRaqami);

//^ 5-topshiriq Hozirgi sanani ISO formatda (YYYY-MM-DDTHH:mm:ss.sssZ) konsolga chiqaruvchi dastur yozing.

// const hozirgiVaqt = new Date();
// const isoFormat = hozirgiVaqt.toISOString();
// console.log("ISO formatdagi sana va vaqt:", isoFormat);

//^ 6-topshiriq 1970-yil 1-yanvardan hozirgi vaqtgacha bo'lgan millisekundlar sonini konsolga chiqaruvchi dastur yozing.

// const millisekundlar = Date.now();
// console.log("1970-yil 1-yanvardan hozirgacha o'tgan millisekundlar:", millisekundlar);

//^ 7-topshiriq Hozirgi sanani o'zbek tilida ko'rsatuvchi dastur yozing. (Intl.DateTimeFormat dan foydalaning)

// const hozirgiVaqt = new Date();
// const formatlovchi = new Intl.DateTimeFormat('uz-UZ', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long'
// });
// const ozbekchaSana = formatlovchi.format(hozirgiVaqt);
// console.log("Bugungi sana:", ozbekchaSana);

//^ 8-topshiriq Hozirgi vaqtga 5 soat qo'shib, yangi vaqtni konsolga chiqaruvchi dastur yozing.

// const vaqt = new Date();
// vaqt.setHours(vaqt.getHours() + 5);
// console.log(vaqt.toString());

//^ Math Object (9-19 topshiriqlar)
// ===============================================================================

//^ 9-topshiriq Math.PI yordamida Pi sonini konsolga chiqaring.

// const piSon = Math.PI;
// console.log("Matematikadagi Pi sonining aniq qiymati:", piSon);

//^ 10-topshiriq 0 va 1 oralig'ida tasodifiy son hosil qiling va konsolga chiqaring.

// const tasodifiySon = Math.random();
// console.log("0 va 1 oralig'idagi tasodifiy son:", tasodifiySon);

//^ 11-topshiriq 4.7 sonini eng yaqin butun songa yaxlitlang va natijani konsolga chiqaring.

// const aslSon = 4.7;
// const yaxlitlanganSon = Math.round(aslSon);
// console.log(aslSon + " sonini eng yaqin butun songa yaxlitlash natijasi:", yaxlitlanganSon);

//^ 12-topshiriq 4.9 sonini pastga (floor) yaxlitlang va natijani konsolga chiqaring.

const aslSon = 4.9;
const pastgaYaxlitlangan = Math.floor(aslSon);
console.log(aslSon + " sonini pastga (floor) yaxlitlash natijasi:", pastgaYaxlitlangan);

//^ 13-topshiriq 4.1 sonini yuqoriga (ceil) yaxlitlang va natijani konsolga chiqaring.

//^ 14-topshiriq [5, 10, 3, 8] massividagi eng katta sonni toping va konsolga chiqaring.

//^ 15-topshiriq [5, 10, 3, 8] massividagi eng kichik sonni toping va konsolga chiqaring.

//^ 16-topshiriq -7 sonining absolut (modul) qiymatini toping va konsolga chiqaring.

//^ 17-topshiriq 2 ning 3-darajasini hisoblang va konsolga chiqaring.

//^ 18-topshiriq 16 ning kvadrat ildizini toping va konsolga chiqaring.

//^ 19-topshiriq 27 ning kub ildizini toping va konsolga chiqaring.

//^ Number Object (20-24 topshiriqlar)
//^ 20-topshiriq JavaScriptdagi maksimal xavfsiz butun sonni (MAX_SAFE_INTEGER) konsolga chiqaring.

//^ 21-topshiriq 42 soni butun son ekanligini tekshiring va natijani (true/false) konsolga chiqaring.

//^ 22-topshiriq "salom" matnini Number() yordamida songa o'girib, natija NaN ekanligini tekshiring va konsolga chiqaring.

//^ 23-topshiriq Infinity qiymati cheksiz son ekanligini tekshiring va natijani konsolga chiqaring.

//^ 24-topshiriq "3.14" matnini Number.parseFloat() yordamida haqiqiy songa o'giring va konsolga chiqaring.

//^ JSON Object (25-27 topshiriqlar)
//^ 25-topshiriq {name: "Ali", age: 25} ob'ektini JSON string formatiga o'giring va konsolga chiqaring.

//^ 26-topshiriq '{"name":"Ali","age":25}' JSON stringini JavaScript ob'ektiga o'giring va konsolga chiqaring.

//^ 27-topshiriq {name: "Ali", age: 25, password: "123"} ob'ektini JSON ga o'giring, faqat name va age maydonlari qolsin. (replacer funksiyasidan foydalaning)

//^ RegExp (28-30 topshiriqlar)
//^ 28-topshiriq "12345" matnida faqat raqamlar borligini tekshiruvchi regexp yozing va natijani konsolga chiqaring.

//^ 29-topshiriq "test@mail.com" email manzilini tekshiruvchi regexp yozing va natijani konsolga chiqaring.

//^ 30-topshiriq "Men 25 yoshdaman, 3 ta kitob o'qidim" matnidagi barcha raqamlarni topib, massiv ko'rinishida konsolga chiqaring.

