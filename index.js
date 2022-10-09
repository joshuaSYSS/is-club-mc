let rAns = 0;
let gAns = 0;
let bAns = 0;
let rCur = 0;
let gCur = 0;
let bCur = 0;
document.addEventListener('keydown', function(event) {
    var c = document.getElementById("cv");
    if(event.keyCode == 82) {//R
        
    }
    else if(event.keyCode == 71) {//G
        
    }
    else if(event.keyCode == 66) {//B
    }
});
function resized(){
    var w = window.innerWidth;
    if(w <= 505){
        document.getElementById("addbr").innerHTML = "<p id=\"addbr\"><br><br></p>";
    }
    else{
        document.getElementById("addbr").innerHTML = "<p id=\"addbr\"></p>";
    }
}
function genColor(){
    let r = Math.floor(Math.random() * 5);
    let g = Math.floor(Math.random() * 5);
    let b = Math.floor(Math.random() * 5);
    console.log(r);
    rAns = r;gAns = g;bAns = b;
    var t = document.getElementById("instruction");
    let code = "<h1 style=\"color:rgb(" + (r*50).toString() + "," + (g*50).toString() + "," + (b*50).toString() + ")\" id=\"instruction\"><code>Recreate this color!</code></h1>";
    console.log(code);
    t.innerHTML = code;
}
function addR(){
    var c = document.getElementById("cv");
    if(rCur < 250)rCur += 50;
    c.style.backgroundColor = "rgb(" + rCur.toString() + "," + gCur.toString() + "," + bCur.toString() + ")";
}
function delR(){
    var c = document.getElementById("cv");
    if(rCur > 0)rCur -= 50;
    c.style.backgroundColor = "rgb(" + rCur.toString() + "," + gCur.toString() + "," + bCur.toString() + ")";
}
function addG(){
    var c = document.getElementById("cv");
    if(gCur < 250)gCur += 50;
    c.style.backgroundColor = "rgb(" + rCur.toString() + "," + gCur.toString() + "," + bCur.toString() + ")";
}
function delG(){
    var c = document.getElementById("cv");
    if(gCur > 0)gCur -= 50;
    c.style.backgroundColor = "rgb(" + rCur.toString() + "," + gCur.toString() + "," + bCur.toString() + ")";
}
function addB(){
    var c = document.getElementById("cv");
    if(bCur < 250)bCur += 50;
    c.style.backgroundColor = "rgb(" + rCur.toString() + "," + gCur.toString() + "," + bCur.toString() + ")";
}
function delB(){
    var c = document.getElementById("cv");
    if(bCur > 0)bCur -= 50;
    c.style.backgroundColor = "rgb(" + rCur.toString() + "," + gCur.toString() + "," + bCur.toString() + ")";
}
function reset(){
    var c = document.getElementById("cv");
    c.style.backgroundColor = "rgb(0, 0, 0)";
}
function submit(){
    alert("Red " + (rCur/50).toString() + " Correct Red Answer " + rAns.toString() +"\nGreen " + (gCur/50).toString() + " Correct Green Answer " + gAns.toString() + "\nBlue " + (bCur/50).toString() + " Correct Blue Answer " + bAns.toString() + "\n" + (Math.abs(rAns - rCur) <= 1 && Math.abs(gAns - gCur) <= 1 && Math.abs(bAns - bCur) <= 1?"Well Done!":Math.abs(rAns - rCur) <= 2 && Math.abs(gAns - gCur) <= 2 && Math.abs(bAns - bCur) <= 2?"You're reaching somewhere!":"Try Harder this time!"));
    genColor();
}

//unused
function changeHeader(){
    var c = document.getElementById("h");
    sleep(5000);
    c.innerHTML = "<h4 style=\"color:#0000ff\" id=\"headerText\>Here, we Integrated Science Club created this game for everyone to try recreating the color we provided.</h4>";
    for(let i = 1.0;i > 0;i-=0.1){
        c.style.opacity = i;
        sleep(100);
    }
    c.innerHTML = "<h4 style=\"color:#0000ff\" id=\"headerText\>Here, we Integrated Science Club created this game for everyone to try recreating the color we provided.</h4>";
    for(let i = 0;i < 0;i+=0.1){
        c.style.opacity = i;
        sleep(100);
    }
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
