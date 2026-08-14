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

// ========================================================================================================================
// ====================================================================================================

// const div = document.getElementById("katta-div");
// const buyruqlar = document.getElementById("tolov");
// const sound = document.getElementById("audio")


// iv.style.width = "400px";
// div.style.height = "450px";
// div.style.backgroundColor = "#6ccde2";
// div.style.borderRadius = "20px";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";

// buyruqlar.style.width = "250px";
// buyruqlar.style.height = "70px";
// buyruqlar.style.borderRadius = "10px";
// buyruqlar.style.backgroundColor = "#3025c9";
// buyruqlar.style.color = "white";
// buyruqlar.style.border = "none";
// buyruqlar.style.cursor = "pointer";
// buyruqlar.style.fontSize = "20px"

// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.minHeight = "100vh";
// document.body.style.margin = "0";

// buyruqlar.addEventListener("click", function () {
//     buyruqlar.innerHTML = "✓ To'lov amalga oshirildi";
//     buyruqlar.style.backgroundColor = "#28e928";
//     buyruqlar.style.width = "240px";
//     buyruqlar.style.height = "70px"
//     sound.play();
// });

// =================================================================================
// ==========================================================================================

// const div = document.getElementById("katta-div");
// const sana = document.getElementById("sana-btn");
// const sound = document.getElementById("audio")

// div.style.width = "400px";
// div.style.height = "450px";
// div.style.backgroundColor = "#6ccde2"; 
// div.style.borderRadius = "20px";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItems = "center";

// sana.style.width = "250px";
// sana.style.height = "70px";
// sana.style.borderRadius = "10px";
// sana.style.backgroundColor = "#3025c9"; 
// sana.style.color = "white";
// sana.style.border = "none";
// sana.style.cursor = "pointer";
// sana.style.fontSize = "18px";
// sana.style.fontSize = "25px" 

// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.minHeight = "100vh";
// document.body.style.margin = "0";

// sana.addEventListener("click", function () {
//     const bugun = new Date();
//     const kun = String(bugun.getDate()).padStart(2, '0');
//     const oy = String(bugun.getMonth() + 1).padStart(2, '0');
//     const yil = bugun.getFullYear();
//     sana.textContent = kun + "." + oy + "." + yil;
//     sana.style.backgroundColor = "#d80f0c";
//     sound.play();
// });

// ===================================================================================
// ===================================================================================

const div = document.getElementById("kuchuk");
const ovoz = document.getElementById("it-ovozi");
const sound = document.getElementById("audio")

div.style.width = "400px";
div.style.height = "450px";
div.style.backgroundColor = "#41db44"; 
div.style.borderRadius = "20px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

ovoz.style.width = "250px";
ovoz.style.height = "70px";
ovoz.style.borderRadius = "10px";
ovoz.style.backgroundColor = "#3025c9"; 
ovoz.style.color = "white";
ovoz.style.border = "none";
ovoz.style.cursor = "pointer";
ovoz.style.fontSize = "18px";
ovoz.style.fontSize = "25px" 

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";

ovoz.addEventListener("click", function () {
    ovoz.innerHTML = "Kuchuk ovozi qo'yildi";
    ovoz.style.backgroundColor = "#e92828";
    ovoz.style.width = "240px";
    ovoz.style.height = "70px"
    sound.play();
});