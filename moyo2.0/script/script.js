let gold = document.querySelector('#gold');
let silver = document.querySelector('#silver');
let text = document.querySelector('.inline_color');
gold.addEventListener('mouseover', () => {
    text.innerHTML = 'Сірий';
    gold_1();
});
silver.addEventListener('mouseover', () => {
    text.innerHTML = 'Золотистий';
    silver_1();
});
gold.addEventListener('mouseout', gold_1 => {
    text.innerHTML = 'Чорний';
});
silver.addEventListener('mouseout', silver_1 => {
    text.innerHTML = 'Чорний';
});
let wrap_face = document.querySelector('#wrap_face');
let service_none = document.querySelector('#service_none');
wrap_face.addEventListener('click', () => {
    service_none.classList.toggle('service_none');
    let act = document.querySelector('.act');
    wrap_face.classList.toggle('act');
});
