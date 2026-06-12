// --- MOBILE NAVIGATION DROPDOWN ---
const menu_btn = document.querySelector('.mobile-menu');
const dropdown = document.querySelector('.mobile-dropdown');
const MOBILE_BREAKPOINT = 600;

if (menu_btn && dropdown) {
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
}

document.querySelectorAll('.faq-item details').forEach(accordion => {
    accordion.addEventListener('toggle', () => {
        const icon = accordion.querySelector('.faq-icon');
        if (icon) {
            if (accordion.open) {
                icon.textContent = '▼';
            } else {
                icon.textContent = '▶';
            }
        }
    });
});