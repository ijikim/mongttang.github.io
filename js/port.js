gsap.registerPlugin(ScrollTrigger);

function port() {
    const horSection = gsap.utils.toArray(".port__item");

    gsap.to(horSection, {
        xPercent: -60 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top top",
            end: "+=5000",
            pin: true,
            scrub: 1,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}

window.addEventListener('DOMContentLoaded', () => {
    port();
});