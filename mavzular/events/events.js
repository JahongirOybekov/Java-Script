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


const div = document.getElementById("katta-div");
const buyruqlar = document.getElementById("tolov");


div.style.width = "400px";
div.style.height = "450px";
div.style.backgroundColor = "bisque";
div.style.borderRadius = "10px";

div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";


buyruqlar.style.width = "250px";
buyruqlar.style.height = "70px"; 
buyruqlar.style.borderRadius = "10px";
buyruqlar.style.backgroundColor = "red";
buyruqlar.style.color = "white"; 
buyruqlar.style.border = "none";
buyruqlar.style.cursor = "pointer";
buyruqlar.style.fontSize = "20px"


document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";


buyruqlar.addEventListener("click", function() {
    buyruqlar.innerHTML = "&#9989; To'lov qilindi"; 
    buyruqlar.style.backgroundColor = "green";      
    buyruqlar.style.width = "200px";                
    buyruqlar.style.height = "70px"
});
