const testimonials = [
    {
        id: 1,
        name: "Neg trapper",
        job: "Trapper",
        img:
            "content/Screenshot_9.png",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Sa niese pas kho",
        job: "Trapper, rapper, pimp",
        img:
            "content/Screenshot_1.png",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Lil drippy",
        job: "big boss",
        img:
            "content/Screenshot_3.png",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Neg Trapstar",
        job: "the boss",
        img:
            "content/Screenshot_3.png",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
//For navbar
const openBtn = document.getElementById('openBtn')
const openBtnClass = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
let status = false

//For testimonials
const image = document.getElementById('person-img')
const name = document.getElementById('name')
const job = document.getElementById('job')
const info = document.getElementById('info')

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
let testIndex = 1
let test

//Event listeners
openBtn.addEventListener('click', navOpen)
nextBtn.addEventListener('click', nextTest)
prevBtn.addEventListener('click', prevTest)


//Functions
function navOpen(){
    if(status === false ){
        sidebar.classList.add('show-sidebar')
        openBtnClass.classList.replace('sidebar-toggle-close','sidebar-toggle-open')
        openBtn.textContent = ">"
        status = true
    }else{
        sidebar.classList.remove('show-sidebar')
        openBtnClass.classList.replace('sidebar-toggle-open','sidebar-toggle-close')
        openBtn.textContent = "<"
        status = false
    }
}
function nextTest() {
    testIndex++
    if (testIndex>4){
        testIndex = 1
    }
    test = testimonials[testIndex]
    image.src = test.img
    name.textContent = test.name
    job.textContent = test.job
    info.textContent = test.text
}
function prevTest() {
    testIndex--
    if (testIndex < 1){
        testIndex = 4
    }
    test = testimonials[testIndex]
    image.src = test.img
    name.textContent = test.id
    job.textContent = test.job
    info.textContent = test.text
}