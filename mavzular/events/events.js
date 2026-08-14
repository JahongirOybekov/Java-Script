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


// const div = document.getElementById("katta-div");
// const buyruqlar = document.getElementById("tolov");
// const sound = document.getElementById("audio")


// div.style.width = "400px";
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


const div = document.getElementById("katta-div");
const sanaButton = document.getElementById("sana-btn");
const sound = document.getElementById("audio")

// 1. Katta och ko'k qutining o'lchamlari va dizayni (Rasmga moslab)
div.style.width = "400px";
div.style.height = "450px";
div.style.backgroundColor = "#6ccde2"; // Rasmdagi och havorang
div.style.borderRadius = "20px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

// 2. Ichidagi to'q ko'k rangli tugma dizayni
sanaButton.style.width = "250px";
sanaButton.style.height = "70px";
sanaButton.style.borderRadius = "10px";
sanaButton.style.backgroundColor = "#3025c9"; // Rasmdagi to'q ko'k rang
sanaButton.style.color = "white";
sanaButton.style.border = "none";
sanaButton.style.cursor = "pointer";
sanaButton.style.fontSize = "18px"; // Rasmdagi matn o'lchamiga moslandi

// 3. Butun sahifani ekranning o'rtasiga tekislash
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
document.body.style.margin = "0";

// 4. Tugma bosilganda bugungi sanaga va yashil rangga o'tish qismi
sanaButton.addEventListener("click", function () {
    // Bugungi haqiqiy jonli sanani olamiz
    const bugun = new Date();
    const kun = String(bugun.getDate()).padStart(2, '0');
    const oy = String(bugun.getMonth() + 1).padStart(2, '0');
    const yil = bugun.getFullYear();

    // Tugma ichidagi yozuvni bugungi sanaga almashtiramiz
    sanaButton.textContent = kun + "." + oy + "." + yil;
    
    // Tugma rangini yashilga o'zgartiramiz
    sanaButton.style.backgroundColor = "#d80f0c";
    sound.play();
});
