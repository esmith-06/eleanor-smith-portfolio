document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    if (!navigation) return;

    navigation.innerHTML = `
        <nav class="main-nav">
            <ul>
                <li><a href="index.html">About Me</a></li>
                <li><a href="internships.html">Internships</a></li>
                <li><a href="entrepreneurship.html">Entrepreneurship</a></li>
                <li><a href="iowa-state.html">Iowa State</a></li>
                <li><a href="future.html">Future</a></li>
            </ul>
        </nav>
    `;

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

});
