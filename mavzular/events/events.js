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
const btn = document.getElementById("tolov");


div.style.width = "400px";
div.style.height = "450px";
div.style.backgroundColor = "bisque";
div.style.borderRadius = "10px";

div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";


btn.style.width = "250px";
btn.style.height = "70px"; 
btn.style.borderRadius = "10px";
btn.style.backgroundColor = "red";
btn.style.color = "white"; 
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
