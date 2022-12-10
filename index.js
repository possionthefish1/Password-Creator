let possible = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let p1 = document.getElementById('c1-btn');   
let p2 = document.getElementById('c2-btn');
let genPass = document.getElementById('gen-btn');
let resetPass = document.getElementById('reset-btn');
genPass.addEventListener("click", gen);
resetPass.addEventListener("click", reset);

function gen() {
    p1.textContent = '';
    p2.textContent = '';
    for (let i = 0; i < 12; i++){
        let rand = Math.floor(Math.random() * possible.length);
        let rand2 = Math.floor(Math.random() * possible.length);
        p1.textContent += possible[rand];
        p2.textContent += possible[rand2];
    }
}

function reset() {

    p1.textContent = '';
    p2.textContent = '';
}



