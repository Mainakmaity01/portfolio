// ================================
// Wait until page loads
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // Mobile Menu
    // ================================

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

    // Close menu after clicking

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


    // ================================
    // Dark Mode
    // ================================

    const themeBtn = document.getElementById("theme-btn");

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        }

        else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });


    // ================================
    // Typing Animation
    // ================================

    const text = [

        "Java Backend Developer",

        "Spring Boot Developer",

        "REST API Developer",

        "Java Programmer"

    ];

    let count = 0;
    let index = 0;
    let current = "";
    let letter = "";

    (function type() {

        if (count === text.length) {

            count = 0;

        }

        current = text[count];

        letter = current.slice(0, ++index);

        document.getElementById("typing").textContent = letter;

        if (letter.length === current.length) {

            count++;

            index = 0;

            setTimeout(type, 1500);

        }

        else {

            setTimeout(type, 120);

        }

    })();


    // ================================
    // Counter Animation
    // ================================

    const counters = document.querySelectorAll(".counter h2");

    counters.forEach(counter => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText = Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            }

            else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });


    // ================================
    // Contact Form
    // ================================

    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Thank you! Your message has been received.");

            form.reset();

        });

    }

});


// ================================
// Scroll Progress Bar
// ================================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =

        progress + "%";

});


// ================================
// Reveal Animation
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section,.project-card,.skill,.timeline-item,.experience-card")

.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// Active Navbar Link
// ================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});