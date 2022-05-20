let hamburger = document.querySelector('.humburger');
let menubar = document.querySelector('.ul-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('activemenu');
    menubar.classList.toggle('activemenu');

});

document.querySelectorAll('.link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('activemenu');
    menubar.classList.remove('activemenu');
}));



// acordeon

let accordeon = document.querySelectorAll('.block');
for (i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}

// for (i = 0; i < accordeon.length; i++) {
//     accordeon[i].addEventListener('click', function () {
//         this.classList.toggle('active');

//     })
// }
