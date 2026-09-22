const header = document.querySelector(".header"),
  menuButton = document.querySelector(".menu"),
  menu = document.querySelector(".navmenu"),
  links = document.querySelectorAll(".navlinks a");
const close = () => {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
};
menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});
links.forEach((a) => a.addEventListener("click", close));
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", scrollY > 16),
  { passive: true },
);
const reveal = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("visible");
        reveal.unobserve(x.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((x) => reveal.observe(x));
const sections = [...document.querySelectorAll("main section[id]")],
  active = new IntersectionObserver(
    (e) =>
      e.forEach((x) => {
        if (x.isIntersecting)
          links.forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + x.target.id,
            ),
          );
      }),
    { rootMargin: "-35% 0px -55% 0px" },
  );
sections.forEach((x) => active.observe(x));
