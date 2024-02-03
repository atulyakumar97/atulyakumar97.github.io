// display sections on clicking on the link
function displaySection(link, section) {
    // link and the section to show
    let lnk = document.querySelector(`#${link}`);
    let sec = document.querySelector(`#${section}`);

    // Function to handle the click event
    function handleLinkClick(event) {
        // remove the section from sight
        for (elem of sec.parentElement.children) {
            elem.style.display = "none";
        }

        sec.classList.remove("section");
        sec.style.display = "block";
        sec.style.animationName = "section";
        sec.style.animationDuration = "0.6s";
        sec.style.animationFillMode = "forwards";

        let menu = document.querySelector("#menu");
        menu.style.marginTop = "0px";
        menu.style.display = "flex";
        menu.style.position = "fixed";
        menu.style.top = "1vw";
        menu.style.transition = "All 1s";
        menu.style.marginTop = "0px";
        menu.style.right = "15vw";

        event.preventDefault();
        lnk.classList.add("active");

        let jiran = lnk.parentElement.children;
        for (j of jiran) {
            j.classList.remove("active");
        }

        event.preventDefault();
        lnk.classList.add("active");
    }

    // Attach the click event handler
    lnk.onclick = handleLinkClick;

    // Return the function so that it can be used later
    return handleLinkClick;
}

// dark and light mode
document.documentElement.style.setProperty('--background-color', '#fafafa');
function switchDarkLightMode() {
    let icon = document.querySelector("#switch-container img");

    function setDarkMode() {
        let darkColor = "#1F2530"; // Adjusted to a slightly lighter shade
        let darkTextColor = "#999";
        let darkTextTitleColor = "#eee";
        let darkTextHoverColor = "#ddd";
        let darkAccentColor = "#222";

        document.documentElement.style.setProperty('--background-color', darkColor);
        document.documentElement.style.setProperty('--text-color', darkTextColor);
        document.documentElement.style.setProperty('--text-title-color', darkTextTitleColor);
        document.documentElement.style.setProperty('--text-hover-color', darkTextHoverColor);
        document.documentElement.style.setProperty('--light-accent-color', darkAccentColor);

        icon.setAttribute("src", "images/sun-filled.svg");
        icon.onmouseover = () => {
            icon.setAttribute("src", "images/sun-filled.svg");
        }
        icon.onmouseout = () => {
            icon.setAttribute("src", "images/sun.svg");
        }

        document.documentElement.classList.add('dark-mode'); // Add dark-mode class
    }

    function setLightMode() {
        document.documentElement.style.setProperty('--background-color', '#fafafa');
        document.documentElement.style.setProperty('--text-color', '#111');
        document.documentElement.style.setProperty('--text-hover-color', "#000");
        document.documentElement.style.setProperty('--text-title-color', "#111");
        document.documentElement.style.setProperty('--light-accent-color', "#ccc");

        icon.setAttribute("src", "images/moon.svg");
        icon.onmouseover = () => {
            icon.setAttribute("src", "images/moon-full.svg");
        }
        icon.onmouseout = () => {
            icon.setAttribute("src", "images/moon.svg");
        }

        document.documentElement.classList.remove('dark-mode'); // Remove dark-mode class
    }

    setDarkMode(); // Set dark mode by default

    icon.onclick = () => {
        // Toggle between dark and light mode when the icon is clicked
        if (getComputedStyle(document.documentElement).getPropertyValue("--background-color") == "#fafafa") {
            setDarkMode();
        } else {
            setLightMode();
        }
    }
}

switchDarkLightMode();
displaySection("about-me","about-me-section");
displaySection("skills","skills-section");
displaySection("projects","projects-section");
displaySection("links","links-section");

// Wait for the DOM to be fully loaded before triggering the click event
document.addEventListener("DOMContentLoaded", function () {
    // Call the displaySection function for "about-me" and store the click event handler
    const aboutMeClickHandler = displaySection("about-me", "about-me-section");

    // Trigger the click event programmatically to load the "about-me" section initially
    aboutMeClickHandler(new Event('click'));
});
