const calcbutton = document.getElementById("calc");
const prevscore = document.getElementById("prevscore");
const afterscore = document.getElementById("afterscore");
const fccheck = document.getElementById("fccheck");
const ajcheck = document.getElementById("ajcheck");
const out1 = document.getElementById("out1");

calcbutton.onclick = () => {
    let temp = 0;
    let overpower = 0;
    if(afterscore.value >= 1007500){
        temp = afterscore.value - Math.max(1007500, prevscore.value);
        overpower += temp * 0.0015;
    }

    if(afterscore.value >= 1005000 && prevscore.value < 1007500){
        temp = Math.min(1007500,afterscore.value) - Math.max(1005000, prevscore.value);
        overpower += temp * 0.001;
    }

    if(afterscore.value >= 1000000 && prevscore.value < 1005000){
        temp = Math.min(1005000,afterscore.value) - Math.max(1000000, prevscore.value);
        overpower += temp * 0.0005;
    }

    if(fccheck.checked){
        overpower += 0.5;
    }

    if(ajcheck.checked){
        overpower += 0.5;
    }

    if(afterscore.value == 1010000 && prevscore.value != 1010000){
        overpower += 0.25;
    }

    if(overpower < 0){
        overpower = 0;
    }
    
    overpower = Math.floor(overpower * 10000) / 10000;
    //console.log();

    if(afterscore.value > 1010000 || prevscore.value > 1010000){
        alert("1,010,000未満のスコアを入力してください。")
        out1.innerHTML = "";
    } else {
        out1.innerHTML = "";
        out1.innerHTML += overpower;
        out1.innerHTML += `<br>理論値${overpower/0.25}曲分の更新です！`
    }
}