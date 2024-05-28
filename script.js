let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let body = document.body;
let items = document.querySelectorAll('.thumbnail .item img');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let heading = document.querySelector('.container .topic');
let desc = document.querySelector('.container .des');
let buttons = document.querySelector('.container .buttons');

let titles = [
    'Animal 1', 'Animal 2', 'Animal 3', 'Animal 4'
];
let descrption=[
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis deleniti incidunt dolorem ex quasi maiores, sit minima, culpa hic repellendus expedita qui facere quam amet consequuntur a? Voluptates, inventore1.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis deleniti incidunt dolorem ex quasi maiores, sit minima, culpa hic repellendus expedita qui facere quam amet consequuntur a? Voluptates, inventore2.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis deleniti incidunt dolorem ex quasi maiores, sit minima, culpa hic repellendus expedita qui facere quam amet consequuntur a? Voluptates, inventore3.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis deleniti incidunt dolorem ex quasi maiores, sit minima, culpa hic repellendus expedita qui facere quam amet consequuntur a? Voluptates, inventore4.',

]

let currentIndex = 0;

let updateBackground = () => {
    const currentURL = items[currentIndex].src;
    body.style.backgroundImage = `url(${currentURL})`;
    return currentURL;
};

let updateHeading = (index) => {
    heading.classList.remove('active');
    desc.classList.remove('active');
    buttons.classList.remove('.active')
    
    setTimeout(()=>{
        heading.innerText = titles[index];
        heading.classList.add('active');
        desc.classList.add('active');
        
        desc.innerText=descrption[index];
        buttons.classList.add('.active')
    },0.5)
    
    
};

nextDom.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateBackground();
    updateHeading(currentIndex);
});

prevDom.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateBackground();
    updateHeading(currentIndex);
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateBackground();
        updateHeading(currentIndex);
    });
});

updateBackground();
updateHeading(currentIndex);
