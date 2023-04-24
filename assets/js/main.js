document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-toggle");
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
      document.body.classList.add("dark-theme");
  }
  btn.addEventListener("click", function(event) {
      document.body.classList.toggle("dark-theme");
      currentTheme = currentTheme == "dark" ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
  });
});