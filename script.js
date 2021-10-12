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
        end: "+=400",
        scrub: true,
        ease: "none",
      },
    })
    .from(h2, {
      duration: 1,
      opacity: 0,
    })
    .from(h3, {
      opacity: 0,
    })
    .from(p, {
      opacity: 0,
      y: 100,
      stagger: 0.1,
    });
});

// billede

gsap.from(".image2", {
  opacity: 0,
  ease: "none",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".image2",
    start: "30% 80%",
    end: "+=190",
    scrub: true,
  },
});
