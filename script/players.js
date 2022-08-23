const playerName =document.getElementById('players-name');

function playerNameSelected(name){
  const playernameTitleElement =document.getElementById(name);
  const playerNameTitle =playernameTitleElement.innerText;
  const newLi =document.createElement('li');
  newLi.innerText =playerNameTitle;
  console.log(newLi)
  playerName.appendChild(newLi);

};
console.log(playerName.appendChild)

// player Number 1 messi
// =======================
document.getElementById('messi-btn').addEventListener('click', function(){
  playerNameSelected('messi-name-titele')
  
})
// player Number 2 naymar
// =======================
document.getElementById('naymar-btn').addEventListener('click', function(){
  playerNameSelected('neme-title-neymar');
})

// player Number 3 machado
// =======================
document.getElementById('machado-btn').addEventListener('click',function(){
  playerNameSelected('name-title-machado')
})
// player Number 4 ramos
// =======================
document.getElementById('ramos-btn').addEventListener('click',function(){
playerNameSelected('name-title-ramos')
})
// player Number 5 ranato
// =======================
document.getElementById('renato-btn').addEventListener('click',function(){
playerNameSelected('name-title-renato')
})
// player Number 3 mbappe
// =======================
document.getElementById('mbappe-btn').addEventListener('click',function(){
  playerNameSelected('name-title-mbappe');

})