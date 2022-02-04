// Get Elements From HTML 
const $ = document
let menuBtn = $.querySelector('.menu-btn');
let menuLine = menuBtn.querySelectorAll('.menu-line')
let openMenu = $.querySelector('.list')
let siteMenu = $.querySelector('.site-menu')
let siteMenuItem = siteMenu.getElementsByTagName('li')
let imageMargin = $.querySelector('.avatar')
let nameAndSocials = $.querySelector('.name-and-social-icon')
let desktopSize = window.matchMedia("(min-width: 567px)");

// site menu item active 

function menuBtnFunction() {
    for (var i = 0; i < menuLine.length; i++) {
        menuLine[i].classList.toggle('active');
    }
    openMenu.classList.toggle('menu-active')
    menuBtn.classList.toggle('active')
    siteMenuItemActive()
}
menuBtn.addEventListener('click', menuBtnFunction);

function siteMenuItemActive() {
    for (var i = 0; i < siteMenuItem.length; i++) {
        if (siteMenuItem[i].classList.contains('site-menu-item')) {
            siteMenuItem[i].classList.remove('site-menu-item');
        } else {
            siteMenuItem[i].classList.add('site-menu-item');
        }
    }
}


// The profile image is scroll when scrolling the page
function windowOnScroll() {
    let scrollTop = $.documentElement.scrollTop
    if (scrollTop > 50) {
        imageMargin.style.marginTop = '1rem'
        nameAndSocials.style.marginTop = '4rem'
    } else {
        imageMargin.style.marginTop = '-6rem'
        nameAndSocials.style.marginTop = '-3rem'
    }
}

function myFunction(deviceWidth) {
    if (deviceWidth.matches) {
        window.removeEventListener('scroll', windowOnScroll)
    } else {
        window.addEventListener('scroll', windowOnScroll)

    }
}

let clientWidth = window.matchMedia("(max-width: 700px)")
myFunction(clientWidth)
clientWidth.addEventListener('change', myFunction)