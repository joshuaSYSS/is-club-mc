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
function rc(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}
function compile(){
    let e = document.getElementById("input").value;
    let cc = document.getElementById("rule").value;
    if(e.length == 0 || cc.length < 6){alert("Invalid.");return;}
    for(let i = 0;i < e.length;i++)if(e[i] != '0' && e[i] != '1'){alert("Please enter pure Binary(only '0's and '1's).");return;}
    var c = cc.split(';');
    let pointer = 0, cPointer = 0;
    while(true){
        let f = c[cPointer].substr(0, 3);
        let s = c[cPointer].substr(3);
        if(e[pointer]=='0'){
            if(f[1]=='S'){
                break;
            }
            else if(f[1]!='N'){
                e = rc(e, f[1], pointer);
            }
            cPointer=parseInt(f[2]);
            if(f[0]=='L'){
                if(pointer==0){alert("1Out of bounds.");return;}
                pointer--;
            }
            else if(f[0]=='R'){
                if(pointer==e.length-1){alert("1Out of bounds.");return;}
                pointer++;
            }
        }
        else{
            if(s[1]=='S'){
                break;
            }
            else if(s[1]!='N'){
                e = rc(e, s[1], pointer);
            }
            cPointer=parseInt(s[2]);
            if(s[0]=='L'){
                if(pointer==0){alert("Out of bounds.");return;}
                pointer--;
            }
            else if(s[0]=='R'){
                if(pointer==e.length-1){alert("Out of bounds.");return;}
                pointer++;
            }
        }
        console.log("e " + e + " pointer " + pointer.toString() + " cPointer " + cPointer.toString());
    }
    alert(e);
}
//unused
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
