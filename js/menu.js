var width = screen.width;
const btnClose = document.querySelector('.close-menu');
const btnOpen = document.querySelector('.open-menu');
const menu = document.querySelector('.main-menu ul');
const menuItem = document.querySelectorAll('.main-menu ul li a');

const openMenu = function () {
    menu.style.display = 'block';
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';

};

const closeMenu = function () {
    menu.style.display = 'none';
    btnClose.style.display = 'none';
    btnOpen.style.display = 'block';
};

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);

menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
        if (width < 768) {
            menu.style.display = 'none';
            btnOpen.style.display = 'block';
            btnClose.style.display = 'none';
        }



    });
});
