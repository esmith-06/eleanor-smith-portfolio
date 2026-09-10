document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.getElementById("navigation");
    if (!navigation) {
        return;
    }
    navigation.innerHTML = `
        <nav class="main-nav">
            <ul>
                <li>
                    <a href="index.html">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="internships.html">
                        Internships
                    </a>
                </li>
                <li>
                    <a href="entrepreneurship.html">
                        Entrepreneurship
                    </a>
                </li>
                <li>
                    <a href="iowa-state.html">
                        Iowa State
                    </a>
                </li>
                <li>
                    <a href="future.html">
                        Future
                    </a>
                </li>
            </ul>
        </nav>
    `;
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";
    const navLinks =
        document.querySelectorAll(".main-nav a");
    navLinks.forEach(function (link) {
        const linkPage =
            link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // Keep any footer/page date stamps current automatically.
    // Add class="js-year" to a <span> anywhere on the page to use this.
    const yearSpans = document.querySelectorAll(".js-year");
    yearSpans.forEach(function (span) {
        span.textContent = new Date().getFullYear();
    });
});
