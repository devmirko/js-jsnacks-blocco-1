// generare l'array di numeri vuoto
const array = [];
for( let i = 0; i < 20 ; i++ ) {
    array.push(Math.floor(Math.random() * 1000 + 1));
}

console.log(array);



for (let i = 0; i < 20; i++){
    const numero = array;
    if (numero[i] % 2 == 0) {
      document.getElementById("red").innerHTML += `<div class="text">${numero[i]}</div>`;
    }
  
    else {
      document.getElementById("green").innerHTML += `<div class="text">${numero[i]}</div>`;
  };


};