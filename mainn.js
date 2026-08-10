// const box = document.getElementById("box");
// // console.log(box)

// box.style.border = "2px solid black"
// box.style.width = "1500px";
// box.style.height = "600px";
// box.style.margin = "auto"
// box.style.marginTop = "50px"
// box.style.display = "flex"
// box.style.justifyContent = "space-around"
// box.style.alignItems = "center"

// const box1 = document.getElementById("box1");

// box1.style.width = "200px"
// box1.style.height = "150px"
// box1.style.backgroundColor = "yellow"

// const box2 = document.getElementById("box2");

// box2.style.width = "200px"
// box2.style.height = "150px"
// box2.style.backgroundColor = "blue"

// const box3 = document.getElementById("box3");

// box3.style.width = "200px"
// box3.style.height = "150px"
// box3.style.backgroundColor = "red"

// const box4 = document.getElementById("box4");

// box4.style.width = "200px"
// box4.style.height = "150px"
// box4.style.backgroundColor = "green"

// const box5 = document.getElementById("box5");

// box5.style.width = "200px"
// box5.style.height = "150px"
// box5.style.backgroundColor = "yellowgreen"

// const box6 = document.getElementById("box6");

// box6.style.width = "200px"
// box6.style.height = "150px"
// box6.style.backgroundColor = "pink"



// ======================================================
// ======================================================



// 1. Yangi div, h1 va p elementlarini yaratamiz
const yangiDiv = document.createElement('div');
const sarlavha = document.createElement('h1');
const matn = document.createElement('p');

// 2. Teglarning ichiga matn yozamiz
sarlavha.textContent = "Bu JavaScript orqali yaratilgan sarlavha";
matn.textContent = "Bu esa h1 tegining ostidagi paragraf matni hisoblanadi.";

// 3. CSS yordamida rang va dizayn beramiz
// Div uchun orqa fon va ichki masofa (padding) beramiz
yangiDiv.style.backgroundColor = "#f0f2f5";
yangiDiv.style.padding = "20px";
yangiDiv.style.borderRadius = "8px";

// h1 tegiga ko'k rang beramiz
sarlavha.style.color = "#007aff";

// p tegiga to'q kulrang beramiz
matn.style.color = "#333333";

// 4. h1 va p teglarini div ichiga joylashtiramiz (joylaymiz)
yangiDiv.appendChild(sarlavha);
yangiDiv.appendChild(matn);

// 5. Tayyor bo'lgan div-ni HTML sahifamizning body qismiga ulaymiz
document.body.appendChild(yangiDiv);