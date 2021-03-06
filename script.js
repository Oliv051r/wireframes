gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll(".sektion");

//Brug forEach() til at loope henover dem

sections.forEach((section) => {
  const h2 = section.querySelector(".nyhed");
  const h3 = section.querySelectorAll("h3");
  const p = section.querySelectorAll("p");

  //Herefter skal vi lave en animation for hhv. h2'erne og p'erne i en timeline

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "0% 80%",
        end: "+=450",
        scrub: true,
        ease: "none",
      },
    })
    .from(h2, {
      duration: 10,
      opacity: 0,
    })
    .from(h3, {
      duration: 10,
      opacity: 0,
    })
    .from(p, {
      opacity: 0,
      y: 100,
      stagger: 0.1,
      duration: 10,
    });
});

// billede

gsap.from(".image2", {
  opacity: 0,
  ease: "none",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".image2",
    start: "20% 90%",
    end: "+=400",
    duration: 10,
    scrub: true,
    markers: true,
  },
});

const highlight = document.getElementById("highlight-style");
const mode = document.getElementById("mode");

const highlights = document.querySelectorAll(".text-highlight");

highlights.forEach((highlight) => {
  ScrollTrigger.create({
    trigger: highlight,
    start: "-90px center",
    onEnter: () => highlight.classList.add("active"),
    onEnterBack: () => highlight.classList.remove("active"),
  });
});
