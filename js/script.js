// Get Elements From HTML 
const $ = document
let menuBtn = $.querySelector('.menu-btn');
let menuLine = menuBtn.querySelectorAll('.menu-line')
let openMenu = $.querySelector('.list')
let siteMenu = $.querySelector('.site-menu')
let siteMenuItem = siteMenu.getElementsByTagName('li')
let imageMargin = $.querySelector('.avatar')
let nameAndSocials = $.querySelector('.name-and-social-icon')
let arrowUpActive = $.querySelector('.arrow-up')
let pageScrolled = false


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

// arrow up page func
function scrolledDown() {
    let scrollTop = $.documentElement.scrollTop
    if (pageScrolled && scrollTop > 100) {
        arrowUpActive.classList.add('arrow-up-active')
    } else {
        arrowUpActive.classList.remove('arrow-up-active')
    }
}
window.addEventListener('scroll', scrolledDown)

arrowUpActive.addEventListener('click', function(){
    window.scrollTo(0,0)
})

// The profile image is scroll when scrolling the page
function windowOnScroll() {
    let scrollTop = $.documentElement.scrollTop
    if (scrollTop > 100) {
        imageMargin.style.marginTop = '1rem'
        nameAndSocials.style.marginTop = '4rem'
    } else {
        imageMargin.style.marginTop = '-6rem'
        nameAndSocials.style.marginTop = '-3rem'
    }
}

function myFunction(deviceWidth) {
    if (deviceWidth.matches) {
        pageScrolled = true
        window.removeEventListener('scroll', windowOnScroll)
    } else {
        window.addEventListener('scroll', windowOnScroll)
        pageScrolled = false
    }
}
let clientWidth = window.matchMedia("(max-width: 1200px)")
myFunction(clientWidth)
clientWidth.addEventListener('change', myFunction)
