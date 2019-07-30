const input1 = document.getElementById("num1");
const span1 = document.getElementById("a");
const span2 = document.getElementById("b");
const btn = document.getElementById("check_btn");

function getRandomInt(min = 0, max = 10)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let a = getRandomInt();
let b = getRandomInt();

span1.innerHTML = a;
span2.innerHTML = b;

btn.addEventListener("click", function() {
  const result = +input1.value;
  let r = null;
  if (result === a*b) {
    r = smoke.confirm('<p class="rightAsn"> Верно!</p>')
  } else {
    r = smoke.confirm('<p class="wrongAns">Не верно.</p> <p class="rightAsn2">Правильный ответ - '+
     (a*b) + '</p>');
  }
	
  
  if (r) {
  	a = getRandomInt();
    b = getRandomInt();
    
    span1.innerHTML = a;
		span2.innerHTML = b;
    
    input1.value = "";
  }
});