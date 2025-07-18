const imgwrapper = document.querySelector(".img-wrapper");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let a = 0;
let timeout;

prev.addEventListener("click" , function (){
    a = a + 45;
    clearTimeout(timeout);
    updatefun();
});

next.addEventListener("click", function (){
    a = a - 45;
    clearTimeout(timeout);
    updatefun();
});

function updatefun() {
    imgwrapper.style.transform = `perpective(1000px)rotateY(${a}deg)`;

    timeout = setTimeout( () => {
        a = a - 45;
        updatefun();
    }, 4000);
}

updatefun();