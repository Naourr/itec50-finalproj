const menu_btn = document.querySelector('.mobile-menu');
const dropdown = document.querySelector('.mobile-dropdown');
const MOBILE_BREAKPOINT = 600;

menu_btn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

function closeDropdownOnDesktop() {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
        dropdown.classList.remove('active');
    }
}

window.addEventListener('resize', closeDropdownOnDesktop);

closeDropdownOnDesktop();