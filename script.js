// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple scroll-reveal
const reveals = document.querySelectorAll(".reveal");

const onScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
