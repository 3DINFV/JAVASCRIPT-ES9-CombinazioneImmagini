"option strict";
let vetComb=[];
let vetImg=[0,0,0,0,0];
let MAX = 4;
let MIN = 1;

window.onload = function (){
    generaCombinazione();
}

function generaCombinazione(){
    for(let i=0;i<5;i++){
        vetComb[i]=Math.floor(Math.random()*(MAX-MIN+1))+MIN;
    }
    console.log(vetComb);
}

function scegli(numBox){
    let img = document.getElementsByClassName("box")[numBox];
    if(img.src == ""){
        img.src="img/1.gif";
        vetImg[numBox]=1;
    }else{
        vetImg[numBox]++;
        if(vetImg[numBox]==5)
            vetImg[numBox]=1;
        img.src="img/"+vetImg[numBox]+".gif";
    }
}

function controlla(){
    let
}