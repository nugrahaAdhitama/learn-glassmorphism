let cardText = document.querySelector(".card-text");
let cardTitle = document.querySelector(".card-title");
let card = document.querySelector(".card");
let layer = document.querySelector(".layer");

card.addEventListener('mouseout', ()=>{
    console.log("Aktif");

    cardText.classList.toggle('hidden');
    cardTitle.classList.toggle('hidden');
    layer.classList.toggle('active');
});