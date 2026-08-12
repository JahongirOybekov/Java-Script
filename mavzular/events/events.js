const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.addEventListener("click", () => {
  console.log("Sichqonchani chap tarafini bir marta bosdingiz!");
  div1.style.backgroundColor = "red";
});

div2.addEventListener("dblclick", () => {
  console.log("Sichqonchani chap tarafini ikki marta bosdingiz!");
});