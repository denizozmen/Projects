
let input = document.getElementById("text");
let button = document.getElementById("btn");
let statment = document.getElementById("statment");
let tester = document.getElementById("tester");

let rndm = Math.floor(Math.random()*101); 
/* Rasgele sayı üretmek için Math (0 dahil 1   hariç)*/

button.addEventListener("click",check);

let counter = 0;

function check() {
   
    let num = Number(input.value);
    
    if (isNaN(num) || num == "" ) {

      statment.innerText = "Are you sure that is a number ?";
      return;    
    } 

    if (rndm == num){
        counter++;
        alert(`You are the winner :smile:. You guest after ${counter} times!`);
        
        if (confirm("You wanna play again")){
            window.location.reload();

        }else{
            window.close();
        }

        
    }else if(rndm>num){
        statment.innerText = "I am thinking abaout High Number";

    }else {
        statment.innerText ="I am thinking abaout Lower Number";
    }

    counter++;
    tester.innerText=`This is your test number:${counter}`;

    input.value ="";
    input.focus();
  

}


