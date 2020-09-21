// document.getElementById("random").innerHTML =
// Math.floor(Math.random() * 100);



const random = Math.floor(Math.random() * 100)



document.getElementById("button").addEventListener("click", check)

function check(){

    const num = document.getElementById("text").value;
    console.log(random);
    // const random = Math.floor(Math.random() * 100)        

    if (num == random) { return alert("Winner!")}
    
    else if (num > random) {document.getElementById("statement").innerHTML = "I am thinking about higher number";}

    else if (num < random ) {document.getElementById("statement").innerHTML = "I am thinking about lower number";}


}