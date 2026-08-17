const app = document.createElement("div");
document.body.append(app);
app.id = "portfolio-app";

// 2. Butun sahifa uchun umumiy CSS dizayn qoidalarini yozamiz
document.body.style.margin = "0";
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.transition = "background-color 0.3s, color 0.3s";

const container = document.getElementById("portfolio-app");
container.style.minHeight = "100vh";
container.style.padding = "20px 80px";
container.style.boxSizing = "border-box";

// Dastlabki to'q rejim (Dark Mode) ranglari
container.style.backgroundColor = "#0f172a"; // To'q ko'k-qora fon
container.style.color = "#ffffff";           // Oq matn

// 3. Sahifaning HTML strukturasini (Navigatsiya, Matnlar, Tugmalar va Rasm) ichiga joylashtiramiz
container.innerHTML = `
    <!-- Yuqoridagi Navigatsiya paneli (Header) -->
    <header style="display: flex; justify-content: space-between; align-items: center; padding: 20px 0; margin-bottom: 60px;">
        <div style="font-size: 24px; font-weight: bold; letter-spacing: 1px;">Charlie<span style="color: #94a3b8;">Rosser</span></div>
        <nav style="display: flex; gap: 30px; align-items: center; font-size: 16px; font-weight: 500;">
            <a href="#" style="color: inherit; text-decoration: none;">Home</a>
            <a href="#" style="color: inherit; text-decoration: none; opacity: 0.7;">Experiences</a>
            <a href="#" style="color: inherit; text-decoration: none; opacity: 0.7;">Portfolio</a>
            <a href="#" style="color: inherit; text-decoration: none; opacity: 0.7;">Certificates</a>
            <!-- Rejimni o'zgartirish tugmasi -->
            <button id="mode-btn" style="
                background-color: #1e293b; 
                color: #38bdf8; 
                border: 1px solid #38bdf8; 
                padding: 8px 16px; 
                border-radius: 20px; 
                cursor: pointer; 
                font-weight: bold;
                display: flex;
                align-items: center;
                gap: 5px;
            ">🌙 Dark Mode</button>
        </nav>
    </header>

    <!-- Asosiy kontent qismi (Ikki ustunli Flexbox) -->
    <main style="display: flex; justify-content: space-between; align-items: center; gap: 5px; flex-wrap: wrap;">
        <!-- Chap tomondagi matnlar ustuni -->
        <div style="flex: 1; min-width: 300px; max-width: 550px;">
            <h1 style="font-size: 42px; line-height: 1.2; margin-bottom: 20px;">Hi, I'm Charlie Rosser - UI/UX Designer</h1>
            <p style="font-size: 16px; line-height: 1.6; opacity: 0.8; text-align: justify; margin-bottom: 40px;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac vulputate nibh. Aliquam a ante et leo accumsan suscipit in eu magna. Ut aliquam aliquet elit sit amet pretium. Vestibulum sit amet ante elementum, vehicula erat nec, dapibus odio. Suspendisse ultricies justo at congue aliquet. Aenean massa justo, cursus quis rhoncus vel, tempus sed lectus. Donec sed sodales felis. Maecenas porta, quam sed mollis.
            </p>
            <!-- Pastdagi 2 ta tugma -->
            <div style="display: flex; gap: 15px;">
                <button style="background-color: #007aff; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">✉ Email me</button>
                <button id="cv-btn" style="background-color: transparent; color: #38bdf8; border: 1px solid #38bdf8; padding: 12px 24px; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer;">📥 My CV</button>
            </div>
        </div>

        <!-- O'ng tomondagi rasm ustuni -->
        <div style="flex: 1; min-width: 300px; display: flex; justify-content: flex-end; position: relative;">
            <div style="position: relative; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                <!-- Anonim yorlig'i -->
                <span style="position: absolute; top: 15px; left: 15px; background-color: #a855f7; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; z-index: 10;">Anonymous</span>
                <!-- Noutbukda ishlayotgan odam rasmi -->
                <img src="https://unsplash.com" alt="Designer" style="width: 100%; max-width: 450px; display: block; filter: brightness(0.9);">
            </div>
        </div>
    </main>
`;

// 4. "Dark/Light Mode" tugmasini bosganda ishlaydigan hodisa (JS)
const modeBtn = document.getElementById("mode-btn");
const cvBtn = document.getElementById("cv-btn");
let isDark = true;

modeBtn.addEventListener("click", function () {
    if (isDark) {
        // Light Mode (Yorug' rejim) sozlamalari
        container.style.backgroundColor = "#ffffff";
        container.style.color = "#0f172a";
        modeBtn.style.backgroundColor = "#f1f5f9";
        modeBtn.style.color = "#0f172a";
        modeBtn.style.border = "1px solid #0f172a";
        modeBtn.textContent = "☀️ Light Mode";
        cvBtn.style.color = "#007aff";
        cvBtn.style.border = "1px solid #007aff";
        isDark = false;
    } else {
        // Dark Mode (To'q rejim) sozlamalari
        container.style.backgroundColor = "#0f172a";
        container.style.color = "#ffffff";
        modeBtn.style.backgroundColor = "#1e293b";
        modeBtn.style.color = "#38bdf8";
        modeBtn.style.border = "1px solid #38bdf8";
        modeBtn.textContent = "🌙 Dark Mode";
        cvBtn.style.color = "#38bdf8";
        cvBtn.style.border = "1px solid #38bdf8";
        isDark = true;
    }
});