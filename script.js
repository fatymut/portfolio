function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode'); 
};

if (darkmode === 'active') {
    enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode'); 
    if (darkmode !== 'active') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// function toggleLanguage() {
//     if (window.location.pathname.includes('index.html')) {
//         window.location.href = 'index_fr.html'; 
//     } else {
//         window.location.href = 'index.html'; 
//     }
// }

function toggleLanguage() {
    const scrollPosition = window.scrollY; 
    sessionStorage.setItem("scrollPosition", scrollPosition); 

    if (window.location.pathname.includes('index.html')) {
        sessionStorage.setItem("language", "fr"); 
        window.location.href = 'index_fr.html'; 
    } else {
        sessionStorage.setItem("language", "en"); 
        window.location.href = 'index.html'; 
    }
}

window.onload = function() {
    const storedLanguage = sessionStorage.getItem("language");
    if (storedLanguage) {
        if (storedLanguage === "fr" && !window.location.pathname.includes('index_fr.html')) {
            window.location.href = 'index_fr.html'; 
        } else if (storedLanguage === "en" && !window.location.pathname.includes('index.html')) {
            window.location.href = 'index.html'; 
        }
    }

    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition !== null) {
        window.setTimeout(function() {
            window.scrollTo(0, savedScrollPosition);
        }, 100);
    }
    sessionStorage.removeItem("scrollPosition");
};







