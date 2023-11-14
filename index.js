const listNav = document.querySelector(".list-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = listNav.getAttribute("data-visible");

  if (visibility === "false") {
    listNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    listNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
