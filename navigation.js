document.addEventListener("DOMContentLoaded", function () {
  const navigation = `
    <nav class="navbar">
      <a href="index.html">About Me</a>
      <a href="internships.html">Internships</a>
      <a href="entrepreneurship.html">Entrepreneurship</a>
      <a href="iowa-state.html">Iowa State</a>
      <a href="future.html">Future</a>
    </nav>
  `;

  document.getElementById("navigation").innerHTML = navigation;
});
