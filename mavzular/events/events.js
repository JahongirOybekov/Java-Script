// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// div1.addEventListener("click", () => {
//   console.log("Sichqonchani chap tarafini bir marta bosdingiz!");
//   div1.style.backgroundColor = "red";
//   div1.style.width = "600px"
//   div1.style.height = "300px"
//   div1.style.transition = "1s"
//   div1.innerHTML = `<button style="width: 100px; height: 60px; border: none; background-color: green; color: snow;">Send</button>`
  
// });

// div2.addEventListener("dblclick", () => {
//   console.log("Sichqonchani chap tarafini ikki marta bosdingiz!");
// });

// ====================================================

const tolovQutisi = document.createElement("button");
document.body.append(tolovQutisi);
tolovQutisi.id = "pay-box";
tolovQutisi.textContent = "To'lovni amalga oshiring"; // Boshlang'ich matn

// 2. Sahifa fonini sozlash va qutini ekranning o'rtasiga qo'yish
document.body.style.backgroundColor = "#f0f2f5";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";

// 3. Qutining boshlang'ich dizayni (ko'rinishi)
const quti = document.getElementById("pay-box");
quti.style.width = "250px";
quti.style.height = "80px";
quti.style.backgroundColor = "#007aff"; // Moviy rang
quti.style.color = "white";
quti.style.fontSize = "18px";
quti.style.fontWeight = "bold";
quti.style.border = "none";
quti.style.borderRadius = "12px";
quti.style.cursor = "pointer"; // Sichqoncha borganda qo'lcha chiqadi
quti.style.boxShadow = "0 4px 15px rgba(0, 122, 255, 0.3)";
quti.style.transition = "all 0.3s ease"; // Rang o'zgarishi silliq bo'lishi uchun

// 4. Quti bosilganda (click bo'lganda) ishlaydigan hodisa
quti.addEventListener("click", function() {
    quti.textContent = "To'lov qilindi"; // Matn o'zgaradi
    quti.style.backgroundColor = "#34c759"; // Rang yashilga o'zgaradi
    quti.style.boxShadow = "0 4px 15px rgba(52, 199, 89, 0.3)";
    quti.style.cursor = "default"; // Bosilgandan keyin oddiy ko'rinishga qaytadi
});