
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li");

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            const sectionName = this.innerText.toLowerCase().replace(/\s+/g, "-");
            const targetSection = document.querySelector(`.${sectionName}`);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
