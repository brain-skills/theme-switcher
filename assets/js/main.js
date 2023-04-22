// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем настройки темы из localStorage
const currentTheme = localStorage.getItem("theme");

// Если текущая тема в localStorage "dark"...
if (currentTheme == "dark") {
  // ...тогда используем класс .dark-theme
  document.body.classList.add("dark-theme");
}

// Слушаем нажатия на кнопку 
btn.addEventListener("click", function(event) {
  // Переключаем класс .dark-theme при каждом нажатии
  document.body.classList.toggle("dark-theme");
  
  // По умолчанию в настройках зададим светлую тему
  let theme = "light";
  // Если установлен класс .dark-theme...
  if (document.body.classList.contains("dark-theme")) {
    // ...тогда в настройках установим темную тему
    theme = "dark";
    event.target.textContent = 'Light Theme';
  } else {
    event.target.textContent = 'Dark Theme';
  }
  // Сохраняем настройки в хранилище localStorage
  localStorage.setItem("theme", theme);
  event.preventDefault();
});