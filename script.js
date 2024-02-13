const bottomDiv = document.getElementById("bottomDiv");
const rollp = document.getElementById("rollp");
function roll(){
    let number = Math.floor(Math.random()*6)+1
    console.log(number);
    switch(number){
        case 1:
        rollp.textContent = "You have rolled 1";
        const img = document.createElement("img");
        img.src = "./images/dice-six-faces-one.png"
        bottomDiv.appendChild(img);
        break;
        case 2:
            rollp.textContent = "You have rolled 2";
            const img2 = document.createElement("img");
            img2.src = "./images/dice-six-faces-two.png"
            bottomDiv.appendChild(img2);
            break;
        case 3:
            rollp.textContent = "You have rolled 3";
            const img3 = document.createElement("img");
            img3.src = "./images/dice-six-faces-three.png"
            bottomDiv.appendChild(img3);
            break;
        case 4:
            rollp.textContent = "You have rolled 4";
            const img4 = document.createElement("img");
            img4.src = "./images/dice-six-faces-four.png"
            bottomDiv.appendChild(img4);
            break;
        case 5:
            rollp.textContent = "You have rolled 5";
            const img5 = document.createElement("img");
            img5.src = "./images/dice-six-faces-five.png"
            bottomDiv.appendChild(img5);
            break;
        case 6:
            rollp.textContent = "You have rolled 6";
            const img6 = document.createElement("img");
            img6.src = "./images/dice-six-faces-six.png"
            bottomDiv.appendChild(img6);
            break;
    }
}