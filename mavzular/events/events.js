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

// 1. Elementlarni HTML dan olamiz
const div = document.getElementById("katta-div");
const btn = document.getElementById("tolov");

// 2. Katta div sozlamalari (Kengligi: 300px, Bo'yi: 350px, Rangi: Sariq)
div.style.width = "400px";
div.style.height = "450px";
div.style.backgroundColor = "bisque";
div.style.borderRadius = "10px";

// Tugmani divning qoq o'rtasiga tekislash
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

// 3. Tugma (Button) sozlamalari (Kengligi: 100px, Rangi: Qizil)
btn.style.width = "250px";
btn.style.height = "70px"; // Tugma chiroyli ko'rinishi uchun bo'yi 50px qilindi
btn.style.borderRadius = "10px";
btn.style.backgroundColor = "red";
btn.style.color = "white"; // Yozuv oq rangda ko'rinishi uchun
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.style.fontSize = "20px"


document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";


btn.addEventListener("click", function() {
    btn.innerHTML = "&#9989; To'lov qilindi"; 
    btn.style.backgroundColor = "green";      
    btn.style.width = "200px";                
    btn.style.height = "70px"
});
