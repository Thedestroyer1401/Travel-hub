let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menuBar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let videoSlider = document.querySelector('#video-slider');

const toggleClass = (element, className) => {
    if (element) {
        element.classList.toggle(className);
    }
};

const addClass = (element, className) => {
    if (element) {
        element.classList.add(className);
    }
};

const removeClass = (element, className) => {
    if (element) {
        element.classList.remove(className);
    }
};

window.addEventListener('scroll', () => {
    removeClass(searchBar, 'active');
    removeClass(loginForm, 'active');
});

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        toggleClass(searchBar, 'active');
    });
}

if (menuBar) {
    menuBar.addEventListener('click', () => {
        toggleClass(navbar, 'active');
    });
}

if (formBtn) {
    formBtn.addEventListener('click', () => {
        addClass(loginForm, 'active');
    });
}

if (formClose) {
    formClose.addEventListener('click', () => {
        removeClass(loginForm, 'active');
    });
}

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let activeBtn = document.querySelector('.controls .active');
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }
        btn.classList.add('active');

        let src = btn.getAttribute('data-src');
        if (videoSlider) {
            videoSlider.src = src;
        }
    });
});

if (typeof Swiper !== 'undefined') {
    new Swiper(".review-slider", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
}