document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection =
                    document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });

    });


    // Portfolio loaded message
    console.log(
        "Raymark Mateo Satingasin Portfolio Loaded Successfully!"
    );

});