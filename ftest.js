function resized(){
    var w = window.innerWidth;
    if(w <= 505){
        document.getElementById("addbr").innerHTML = "<p id=\"addbr\"><br><br><br><br><br><br><br></p>";
    }
    else{
        document.getElementById("addbr").innerHTML = "<p id=\"addbr\"></p>";
    }
    let n = w/100;
    document.getElementById("turnOnText").innerHTML = "<b id=\"turnOnText\" style=\"font-size:" + Math.max(n, 10).toString() + "px\">TURN ON</b>";
}
function changeImg(){
    let value = document.getElementById("metal").value;
    let s = "img/" + value + ".png";
    document.getElementById("mp").innerHTML = "<p id=\"mp\"><img alt=\"Metal\" src=\"" + s + "\" class=\"responsiveImg\" style=\"width:80px;height:70px\" title=\"Metal\"/></p>";
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
