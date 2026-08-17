const container = document.getElementById("portfolio-app");
const modeBtn = document.getElementById("mode-btn");
const cvBtn = document.getElementById("cv-btn");

// Holatni tekshirish uchun o'zgaruvchi (Boshida Dark rejimda bo'ladi)
let isDark = true;

// Tugma bosilganda ishlaydigan hodisa
modeBtn.addEventListener("click", function () {
    if (isDark) {
        // --- LIGHT MODE (Yorug' rejim) ---
        container.style.backgroundColor = "#ffffff";
        container.style.color = "#0f172a";

        modeBtn.style.backgroundColor = "#f1f5f9";
        modeBtn.style.color = "#0f172a";
        modeBtn.style.border = "1px solid #0f172a";
        modeBtn.textContent = "☀️ Light Mode";

        cvBtn.style.color = "#007aff";
        cvBtn.style.border = "1px solid #007aff";

        isDark = false; // Holat o'zgardi
    } else {
        // --- DARK MODE (To'q rejim) ---
        container.style.backgroundColor = "#0f172a";
        container.style.color = "#ffffff";

        modeBtn.style.backgroundColor = "#1e293b";
        modeBtn.style.color = "#38bdf8";
        modeBtn.style.border = "1px solid #38bdf8";
        modeBtn.textContent = "🌙 Dark Mode";

        cvBtn.style.color = "#38bdf8";
        cvBtn.style.border = "1px solid #38bdf8";

        isDark = true; // Holat qaytdi
    }
});