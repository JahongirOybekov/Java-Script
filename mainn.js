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



// 1. Div yaratamiz va sahifaga qo'shamiz
const div = document.createElement("div")
document.body.append(div)
div.id = "div"

const div1 = document.getElementById("div")
div1.style.width = "400px"
div1.style.height = "300px"
div1.style.backgroundColor = "red"
div1.style.margin = "200px auto"
div1.style.borderRadius = "20px"
div1.style.display = "flex"
div1.style.flexDirection = "column"
div1.style.alignItems = "center"
div1.style.justifyContent = "center"


div1.innerHTML = `
    <h1 style="color: white; font-size: 50px;">Shoxruzbek</h1>
    <p style="color: yellow; font-size: 30px;">Lagerga bormadi</p>
`;
