let gameseq = [];
let userseq= [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    }, 500)
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];

    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);
    // random button flash
    btnflash(randbtn);
}

function checkAns(idx){
   // console.log(`level is ${level}`);

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelUp(), 1000);
        }
    }else{
        h2.innerHTML = `game over! your sccore is <b>${level}</b> press any key to start again`;
        reset();
    }
}

function btnpress() {
   //console.log(this);
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    //console.log(usercolor);  
    
    checkAns(userseq.length - 1);

}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
