let home = document.getElementById('home');
let office = document.getElementById('office');
let wardrobe = document.getElementById('wardrobe');
let storage = document.getElementById('storage');
let table = document.getElementById('table');
let chair = document.getElementById('chair');
let sofa = document.getElementById('sofa');
let items = document.querySelectorAll('.shop-menu__item')
let showacse = document.querySelector('.shop-showcase');
let faqBtns = document.querySelectorAll('.plus');


opacityRemove = () => {
    console.log('1');
    showacse.classList.add('hidden-showcase');
}

opacityAdd = () => {
    console.log('2');
    showacse.classList.remove('hidden-showcase')
}

opacityManipulation = () => {
    opacityRemove();
    setTimeout(() => {
        opacityAdd();
    }, 500);

}

document.querySelector('.shop-menu').addEventListener('click', (e) => {

    if (e.target === home || e.target.parentNode === home) {
        document.querySelector('.active-item').classList.remove('active-item');
        home.classList.add('active-item');
        opacityManipulation();
    }
    else if (e.target === office || e.target.parentNode === office) {
        document.querySelector('.active-item').classList.remove('active-item');
        office.classList.add('active-item');
        opacityManipulation();
    }
    else if (e.target === wardrobe || e.target.parentNode === wardrobe) {
        document.querySelector('.active-item').classList.remove('active-item');
        wardrobe.classList.add('active-item');
        opacityManipulation();
    }
    else if (e.target === storage || e.target.parentNode === storage) {
        document.querySelector('.active-item').classList.remove('active-item');
        storage.classList.add('active-item');
        opacityManipulation();
    }
    else if (e.target === table || e.target.parentNode === table) {
        document.querySelector('.active-item').classList.remove('active-item');
        table.classList.add('active-item');
        opacityManipulation();
    }
    else if (e.target === chair || e.target.parentNode === chair) {
        document.querySelector('.active-item').classList.remove('active-item');
        chair.classList.add('active-item');
        opacityManipulation();
    }
    else if (e.target === sofa || e.target.parentNode === sofa) {
        document.querySelector('.active-item').classList.remove('active-item');
        sofa.classList.add('active-item');
        opacityManipulation();
    }
});

for (i = 0; i < faqBtns.length; i++) {
    faqBtns[i].parentElement.parentElement.lastElementChild.style.display = 'none';
    faqBtns[i].addEventListener("click", (e) => {
        tempFaqBtn = e.target;
        if (tempFaqBtn.childNodes.length === 0) {
            tempFaqBtn = tempFaqBtn.parentElement;
        } 
        if (tempFaqBtn.parentElement.parentElement.lastElementChild.style.display === 'none') {
            ((tempFaqBtn.parentElement).parentElement).lastElementChild.style.display = 'block';
            tempFaqBtn.firstElementChild.style.transform = 'rotate(90deg)';
        }
        else if (tempFaqBtn.parentElement.parentElement.lastElementChild.style.display = 'block') {
            ((tempFaqBtn.parentElement).parentElement).lastElementChild.style.display = 'none';
            tempFaqBtn.firstElementChild.style.transform = 'rotate(0)';
        }

    })
}

window.onload = () => {
    let temp = document.querySelectorAll('.main-img');
    for (let i = 0; i < 6; i += 1) {
        let tempWidth = (temp[i].parentElement.offsetWidth - temp[i].offsetWidth) / 2;
        temp[i].style.left = `${tempWidth}px`;
    }
}

