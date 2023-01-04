const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");
const currentCups = document.querySelector(".current-cups");
const currentLiters = document.querySelector(".current-liters")
const currentPercentage = document.querySelector(".current-percentage");
const progress = document.querySelector(".progress");
const container = document.querySelector(".container");


const max_cups=10,
      min_cups=0;

let cups=0, 
    liters =0,
    percentage =0;

addButton.addEventListener("click", addCup);
removeButton.addEventListener("click", removeCup);

function addCup(){
    cups++;
    liters += 250;
    percentage = (cups / max_cups)*100;

    updateLayout();
    
    if(cups === max_cups){
        addButton.disabled =true;
        document.body.style.backgroundColor = "#18ab5a";
    }else {
        removeButton.disabled= false;
        document.body.style.backgroundColor = "rgb(177, 165, 236)";
    }
    

}


function removeCup(){
    cups--;
    liters-=250;
    percentage = (cups / max_cups)*100;

    updateLayout();

    if(cups === min_cups){
        removeButton.disabled = true;
        document.body.style.backgroundColor = "#f35558";
        
    }else {
        addButton.disabled= false;
        document.body.style.backgroundColor = "rgb(177, 165, 236)";
        
    }
}

function updateLayout() {
    currentCups.textContent = `${cups}/10`;
    currentLiters.textContent = `${liters/1000}l/2.5l`;
    currentPercentage.textContent = `${percentage}%`;
    progress.style.height = `${percentage}%`;

}