const expand = document.querySelector(".expand");
const expandBanner = document.querySelector(".expand-banner");

expand.addEventListener("click", () => {
  expandBanner.classList.toggle("show");
});
