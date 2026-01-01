// Desktop dropdown
const dd = document.querySelector("[data-dropdown]");
if (dd) {
  const btn = dd.querySelector("button");
  btn.addEventListener("click", () => dd.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!dd.contains(e.target)) dd.classList.remove("open");
  });
}

// Mobile menu
const hamb = document.querySelector("[data-hamburger]");
const mobile = document.querySelector("[data-mobile]");
if (hamb && mobile) {
  hamb.addEventListener("click", () => mobile.classList.toggle("show"));
}
const mobileServicesBtn = document.querySelector("[data-mobile-services]");
const mobileSub = document.querySelector("[data-mobile-sub]");
if (mobileServicesBtn && mobileSub) {
  mobileServicesBtn.addEventListener("click", () => mobileSub.classList.toggle("show"));
}

// Small helper: sets current year
const y = document.querySelector("[data-year]");
if (y) y.textContent = new Date().getFullYear();
