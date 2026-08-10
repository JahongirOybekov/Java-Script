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


// const div = document.createElement("div")
// document.body.append(div)
// div.id = "div"

// const div1 = document.getElementById("div")
// div1.style.width = "400px"
// div1.style.height = "300px"
// div1.style.backgroundColor = "red"
// div1.style.margin = "200px auto"
// div1.style.borderRadius = "20px"
// div1.style.display = "flex"
// div1.style.flexDirection = "column"
// div1.style.alignItems = "center"
// div1.style.justifyContent = "center"


// div1.innerHTML = `
//     <h1 style="color: white; font-size: 50px;">Shoxruzbek</h1>
//     <p style="color: yellow; font-size: 30px;">Lagerga bormadi</p>
// `;


// ================================================
// ================================================


const asosiyDiv = document.createElement("div");
document.body.append(asosiyDiv);
asosiyDiv.id = "main-container";

// Asosiy div uchun umumiy shrift va fon dizaynini beramiz
const container = document.getElementById("main-container");
container.style.fontFamily = "Arial, sans-serif";
container.style.backgroundColor = "#e0ebeb"; // Orqa fondagi och kulrang-havorang tus
container.style.padding = "20px";
container.style.minHeight = "100vh";

// 2. Ichiga HTML strukturasini rasmdagidek qilib joylashtiramiz
container.innerHTML = `
    <!-- Yuqoridagi rang-barang banner qismi -->
    <div style="
        width: 100%; 
        height: 180px; 
        background: linear-gradient(135deg, #0099cc, #33cc99, #ffcc00, #ff5050); 
        border-radius: 4px;
        margin-bottom: 30px;
    "></div>

    <!-- Pastdagi 4 ta matnli kartalar uchun qator (Flexbox) -->
    <div style="
        display: flex; 
        justify-content: space-between; 
        gap: 15px; 
        flex-wrap: wrap;
    ">
        <!-- 1-karta -->
        <div style="flex: 1; min-width: 200px; background: white; padding: 15px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="color: #555; font-size: 14px; line-height: 1.5; margin: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia facilis omnis dolor. Corrupti, nulla facilis omnis dolor consequuntur magni.</p>
        </div>

        <!-- 2-karta -->
        <div style="flex: 1; min-width: 200px; background: white; padding: 15px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="color: #555; font-size: 14px; line-height: 1.5; margin: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia facilis omnis dolor. Corrupti, nulla facilis omnis dolor consequuntur magni.</p>
        </div>

        <!-- 3-karta -->
        <div style="flex: 1; min-width: 200px; background: white; padding: 15px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="color: #555; font-size: 14px; line-height: 1.5; margin: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia facilis omnis dolor. Corrupti, nulla facilis omnis dolor consequuntur magni.</p>
        </div>

        <!-- 4-karta -->
        <div style="flex: 1; min-width: 200px; background: white; padding: 15px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p style="color: #555; font-size: 14px; line-height: 1.5; margin: 0;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, mollitia facilis omnis dolor. Corrupti, nulla facilis omnis dolor consequuntur magni.</p>
        </div>
    </div>
`;