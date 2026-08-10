const header = document.querySelector(".site-header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.style.borderBottomColor =
                "rgba(255, 255, 255, 0.09)";
        } else {
            header.style.borderBottomColor = "transparent";
        }
    });
}


const revealElements = document.querySelectorAll(
    ".section-heading, \
     .about-content, \
     .portfolio-card, \
     .contact-heading, \
     .contact-links, \
     .page-hero, \
     .case-preview"
);


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});