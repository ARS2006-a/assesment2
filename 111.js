const btn = document.getElementsByTagName("button");
const incbtn = btn[0];
const decbtn = btn[1];
const resetbtn = btn[2];
const p=document.querySelector("#val");

let val = 0;
let inc = true;

let pause = () => {
    if (val >= 10){
        inc = false;
    }
};

const handleInc = () => {
    if(inc) {
        val = val + 1;

        p.textContent = val;

    }
    pause();
};

const handler = (vall) => {
    if(inc) {
       vall ? (val = val + 1):(val = val - 1);
       val>=0 ? (p.style.color = "green"):(p.style.color = "blue");
        p.textContent = val;
}
pause();
};

const init = () => {
    
    val = 0;
    p.textContent = val;
    inc  =  true;
};



incbtn.addEventListener("click",() => handler(true));

decbtn.addEventListener("click",() => handler(false));

resetbtn.addEventListener("click",init);

