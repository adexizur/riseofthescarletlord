const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {
  if (window.scrollY > 50) { // задаем позицию, после которой появится кнопка
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // устанавливаем плавную прокрутку
  });
});