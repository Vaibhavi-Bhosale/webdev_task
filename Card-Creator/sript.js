const create = document.querySelector("#create");
const cardsContainer = document.querySelector("#cardsContainer");
const removeAll = document.querySelector("#removeAll");
const remove = document.querySelectorAll(".remove");
let allCardsCount = 0;
//cards create
createCards = (number) => {
    for (let i = 1; i <= number; i++) {

        allCardsCount +=1;
        let card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `Hello : ) ${allCardsCount}
        <button class="remove">Remove</button>`
              
        cardsContainer.appendChild(card);
    }
    
    document.body.appendChild(cardsContainer);
}

let count;
create.addEventListener("click", () => {
    let input = document.querySelector("#input");
    count = input.value;
    console.log("This is print ", count)
    
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    
    createCards(count)
})

//remove individual card
cardsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        allCardsCount -= 1;
    }
})

//remove all card
removeAll.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
    document.body.appendChild(cardsContainer);
    allCardsCount = 0;
})






