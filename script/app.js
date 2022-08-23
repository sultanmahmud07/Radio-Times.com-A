let arrayMale =[];
function playerSelect(player){
  const playerName =player.parentNode.children[0].innerText;
  // console.log(playerName)

  arrayMale.push(playerName)
  console.log(arrayMale)
  console.log(arrayMale.length)
  // const playerList =document.getElementById('players-name');
  // const newPlayerList =playerList.append(arrayMale);
  
  
 
  // playerList.appendChild(playerName)
  // console.log(playerList)
  
}

document.getElementById('messi-btn').addEventListener('click',function(){
playerSelect(this) 

}) 

document.getElementById('naymar-btn').addEventListener('click',function(){
playerSelect(this) 

}) 
document.getElementById('machado-btn').addEventListener('click',function(){
playerSelect(this) 

}) 
document.getElementById('ramos-btn').addEventListener('click',function(){
playerSelect(this) 

}) 
document.getElementById('renato-btn').addEventListener('click',function(){
playerSelect(this) 

}) 
document.getElementById('mbappe-btn').addEventListener('click',function(){
  playerSelect(this) 
  
  }) 