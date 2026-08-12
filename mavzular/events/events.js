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
const sound = document.getElementById("audio")


div.style.width = "400px";
div.style.height = "450px";
div.style.backgroundColor = "#f1faf1";
div.style.borderRadius = "20px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.border = "1px solid black"


buyruqlar.style.width = "250px";
buyruqlar.style.height = "70px";
buyruqlar.style.borderRadius = "10px";
buyruqlar.style.backgroundColor = "#f02724";
buyruqlar.style.color = "white";
buyruqlar.style.border = "none";
buyruqlar.style.cursor = "pointer";
buyruqlar.style.fontSize = "20px"


document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";


buyruqlar.addEventListener("click", function () {
    buyruqlar.innerHTML = "✓ To'lov amalga oshirildi";
    buyruqlar.style.backgroundColor = "#28e928";
    buyruqlar.style.width = "240px";
    buyruqlar.style.height = "70px"
});

btn.addEventListener("click", () => {
    console.log("Ishladi");
    btn.innerHTML = "✅ To'lov qilindi";
    btn.style.backgroundColor = "green";
    sound.play();
});