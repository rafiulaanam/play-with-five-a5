const orderList = document.createElement("ol");

function selectBtn(playerName){  
const playerNameText = playerName.innerText
const list = document.createElement("li");
list.innerText = playerNameText;

document.getElementById("play-list").appendChild(orderList);
orderList.appendChild(list);

const listLength = document.getElementsByTagName('li')
if(listLength.length === 5){
    alert('Warning!! You already added five Player. You cannot more than that.');
    document.getElementById('btn-1').setAttribute('disabled', '');
    document.getElementById('btn-2').setAttribute('disabled', '');
    document.getElementById('btn-3').setAttribute('disabled', '');
    document.getElementById('btn-4').setAttribute('disabled', '');
    document.getElementById('btn-5').setAttribute('disabled', '');
    document.getElementById('btn-6').setAttribute('disabled', '');
    document.getElementById('btn-7').setAttribute('disabled', '');
    document.getElementById('btn-8').setAttribute('disabled', '');
    document.getElementById('btn-9').setAttribute('disabled', '');
    document.getElementById('btn-10').setAttribute('disabled', '');
    document.getElementById('btn-11').setAttribute('disabled', '');
    document.getElementById('btn-12').setAttribute('disabled', '');
}


}


document.getElementById('btn-1').addEventListener('click', function(){
    const player = document.getElementById('afif')
    selectBtn(player)
  document.getElementById('btn-1').style.backgroundColor ='#A2A9AF';

  document.getElementById('btn-1').setAttribute('disabled', '');
  
   
})
document.getElementById('btn-2').addEventListener('click', function(){
    const player = document.getElementById('mah')
    selectBtn(player)
    document.getElementById('btn-2').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-2').setAttribute('disabled', '');
})
document.getElementById('btn-3').addEventListener('click', function(){
    const player = document.getElementById('tas')
    selectBtn(player)
    document.getElementById('btn-3').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-3').setAttribute('disabled', '');
})
document.getElementById('btn-4').addEventListener('click', function(){
    const player = document.getElementById('eba')
    selectBtn(player)
    document.getElementById('btn-4').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-4').setAttribute('disabled', '');
})
document.getElementById('btn-5').addEventListener('click', function(){
    const player = document.getElementById('meh')
    selectBtn(player)
    document.getElementById('btn-5').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-5').setAttribute('disabled', '');
})
document.getElementById('btn-6').addEventListener('click', function(){
    const player = document.getElementById('moh')
    selectBtn(player)
    document.getElementById('btn-6').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-6').setAttribute('disabled', '');
})
document.getElementById('btn-7').addEventListener('click', function(){
    const player = document.getElementById('moh')
    selectBtn(player)
    document.getElementById('btn-7').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-7').setAttribute('disabled', '');
})
document.getElementById('btn-8').addEventListener('click', function(){
    const player = document.getElementById('mus')
    selectBtn(player)
    document.getElementById('btn-8').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-8').setAttribute('disabled', '');
})
document.getElementById('btn-9').addEventListener('click', function(){
    const player = document.getElementById('must')
    selectBtn(player)
    document.getElementById('btn-9').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-9').setAttribute('disabled', '');
})
document.getElementById('btn-10').addEventListener('click', function(){
    const player = document.getElementById('sab')
    selectBtn(player)
    document.getElementById('btn-10').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-10').setAttribute('disabled', '');
})
document.getElementById('btn-11').addEventListener('click', function(){
    const player = document.getElementById('sha')
    selectBtn(player)
    document.getElementById('btn-11').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-11').setAttribute('disabled', '');
})
document.getElementById('btn-12').addEventListener('click', function(){
    const player = document.getElementById('mus')
    selectBtn(player)
    document.getElementById('btn-12').style.backgroundColor ='#A2A9AF';
  document.getElementById('btn-12').setAttribute('disabled', '');
})







document.getElementById('calculate').addEventListener('click', function(){
    const listLength = document.getElementsByTagName('li').length;
const perPlayer =document.getElementById('per-player').value;
if (perPlayer == "") {
    alert("Number must be filled out");
    return false;
  }
const calculate = listLength * perPlayer;

const playerExpenses = document.getElementById('player-expenses')
 playerExpenses.innerText = calculate;


})

document.getElementById('calculate-total').addEventListener('click', function(){
    const listLength = document.getElementsByTagName('li').length;
const perPlayer =document.getElementById('per-player').value;

const calculate = listLength * perPlayer;
const manager =parseFloat(document.getElementById('manager').value);
const coach =parseFloat(document.getElementById('coach').value);
if (manager == "" || coach == "") {
    alert("Name must be filled out");
    return false;
  }
else{
    
const totalCalculation = calculate + manager +coach ;

const totalCalculate = document.getElementById('total-money')
totalCalculate.innerText = totalCalculation
}

})

