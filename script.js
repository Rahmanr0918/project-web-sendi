const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const navigationItems = navigation.querySelectorAll("li"); // Ambil semua elemen li

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Tambahkan event listener untuk setiap elemen li
navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
