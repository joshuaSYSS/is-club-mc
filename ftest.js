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
    let s = "";
    if(value=="aluminium"){
        s = "https://i.ibb.co/Fmxk2Vp/aluminium.png";
    }
    else if(value == "calcium"){
        s = "https://i.ibb.co/WH8j1Vs/calcium.png";
    }
    else if(value == "iron"){
        s = "https://i.ibb.co/mCWF0Cc/iron.png";
    }
    else if(value == "mercury"){
        s = "https://i.ibb.co/23rqGpY/mercury.png";
    }
    else if(value == "lithium"){
        s = "https://i.ibb.co/JBZpCBV/lithium.png";
    }
    else if(value == "potassium"){
        s = "https://i.ibb.co/MSpH9Xr/potassium.png";
    }
    else if(value == "sodium"){
        s = "https://i.ibb.co/KsYSVFs/sodium.png";
    }
    else{
        s = "https://i.ibb.co/GCSXYmg/zinc.png";
    }
    document.getElementById("mp").innerHTML = "<p id=\"mp\"><img alt=\"Metal\" src=\"" + s + "\" class=\"responsiveImg\" style=\"width:80px;height:70px\" title=\"Metal\"/></p>";
}
let on = false;
function turnOn(){
    if(on)return;
    on = true;
    let value = document.getElementById("metal").value;
    document.getElementById("flame").style = "transition:opacity:2s";
    document.getElementById("flame").className += " setOpacity";
    document.getElementById("turnOnButtonD").disabled = true;
    //document.getElementById("flame").innerHTML = "<button class=\"turnOnButton\" style=\"max-width: 100%;height: auto;\" onclick=\"turnOn()\" id=\"turnOnButton\" disabled><b id=\"turnOnText\">TURN ON</b></button>";
    setTimeout(() => {  
        let s = "";
     let value = document.getElementById("metal").value;
        if(value == "aluminium"){
            s = "https://i.ibb.co/N1tRTjQ/silver-Flame.png";
        }
        else if(value == "calcium"){
            s = "https://i.ibb.co/r5DMGdM/orange-Flame.png";
        }
        else if(value == "lithium"){
            s = "https://i.ibb.co/f07kNT8/carmine-Red-Flame.png";
        }
        else if(value == "sodium" || value == "iron"){
            s = "https://i.ibb.co/MfgSFTb/gold-Flame.png";
        }
        else if(value == "potassium"){
            s = "https://i.ibb.co/FJcxWt4/lilac-Flame.png";
        }
        else if(value == "mercury"){
            s = "https://i.ibb.co/Tt88nxG/redFlame.png";
        }
        else{
            s = "https://i.ibb.co/f25g1nf/blueish-Green-Flame.png";
        }
        
    document.getElementById("flame").src = s;
    }, 3000);
    setTimeout(() => {  
        let value = document.getElementById("metal").value;
        let mg = "As observed, ";
        mg += value + " produce a";
        if(value=="aluminium"){
            mg += " silver flame.";
        }
        else if(value=="calcium"){
            mg += "n orange flame.";
        }
        else if(value == "lithium"){
            mg += " carmine red(slightly purplish red) flame.";
        }
        else if(value == "sodium" || value == "iron"){
            mg += " gold flame.";
        }
        else if(value == "potassium"){
            mg += "lilac(light purple) flame.";
        }
        else if(value == "mercury"){
            mg += " red flame.";
        }
        else{
            mg += " bluish-green flame.";
        }
        alert(mg);
        document.getElementById("flame").style = "opacity:0;transition:opacity:2s;";
        document.getElementById("flame").className = document.getElementById("flame").className.substr(0, document.getElementById("flame").className.length - 11);
        document.getElementById("flame").src = "https://i.ibb.co/dPXPCqV/bunsen-Burner-Flame.png";
        document.getElementById("flame").innerHTML = "<button class=\"turnOnButton\" style=\"max-width: 100%;height: auto;\" onclick=\"turnOn()\" id=\"turnOnButton\"><b id=\"turnOnText\">TURN ON</b></button>";
        on = false;
    }, 5000);
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
