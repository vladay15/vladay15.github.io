// document.addEventListener("scroll", ()=> {
//     let block = document.getElementById("main_menu");
//     // this.console.log(pageYOffset);
//     if (pageYOffset > 720) {
//         block.classList.add("db");
//         block.classList.remove("db__one");
//     } else {
//         block.classList.remove("db");
//         block.classList.add("db__one");
//     }
// });
document.oncontextmenu =
    ()=> {
        return false;
    };

// sub menu
let about = document.querySelector("#a_about");
let sub_menu = document.querySelector("#about_sub_menu");
about.addEventListener('click',()=>{
    sub_menu.classList.toggle('active_about_sub_menu');
});
let li_about = document.querySelector("#li_about");
li_about.addEventListener('mouseleave',()=>{
    sub_menu.classList.remove('active_about_sub_menu');
});

document.addEventListener("scroll", ()=> {
    let a = pageYOffset;
    let resume_block = document.querySelector('.block');
    let triangle_top = document.querySelector('.triangle_top');
    let triangle_bottom = document.querySelector('.triangle_bottom');
    console.log(a);
    if(a >= 198 && a<=1700){
        resume_block.style.opacity = '1';
        triangle_top.style.animation = 'show_top 1s ease-in-out';
        triangle_bottom.style.animation = 'show_bottom 0.8s ease-in-out';
    }
    let photoshop = document.querySelector('#photoshop');
    let html = document.querySelector('#html');
    let left = 0 + 'px'; 
    let css = document.querySelector('#css');
    let javascript = document.querySelector('#javascript');
    if(a>=1510){
        photoshop.style.left = left;
        photoshop.style.opacity = 1;
        html.style.left = left;
        html.style.opacity = 1;
        css.style.left = left;
        css.style.opacity = 1;
        javascript.style.left = left;
        javascript.style.opacity = 1;
        photoshop.classList.add('photoshop');
        html.classList.add('html');
        css.classList.add('css');
        javascript.classList.add('javascript');
    }
    let container_works = document.querySelector('.container_works');
    if(a>=2210){
        container_works.style.opacity = 1;
    }
});

const mq = window.matchMedia( "(min-width: 1000px)" );
if (mq.matches) {
    document.addEventListener("scroll", ()=> {
        let block = document.getElementById("main_menu");
        if (pageYOffset > 640) {
            block.classList.add("db");
            block.classList.remove("db__one");
        } else {
            block.classList.remove("db");
            block.classList.add("db__one");
        }
    });
}
const md = window.matchMedia( "(max-width: 400px)" );
if (md.matches) {
    document.addEventListener("scroll", ()=> {
        let a = pageYOffset;
        console.log(a);
        let photoshop = document.querySelector('#photoshop');
        let html = document.querySelector('#html');
        let left = 0 + 'px'; 
        let css = document.querySelector('#css');
        let javascript = document.querySelector('#javascript');
        let container_works = document.querySelector('.container_works');
        if(a>=420){
            photoshop.style.left = left;
            photoshop.style.opacity = 1;
            html.style.left = left;
            html.style.opacity = 1;
            css.style.left = left;
            css.style.opacity = 1;
            javascript.style.left = left;
            javascript.style.opacity = 1;
            photoshop.classList.add('photoshop');
            html.classList.add('html');
            css.classList.add('css');
            javascript.classList.add('javascript');
        }
        if(a>=1430){
            container_works.style.opacity = 1;
        }
    });
}