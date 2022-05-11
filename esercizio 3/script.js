const firstArr = ["parola1", "parola2" , "parola3" , "parola4" , "parola5"];
const secondArr = ["arr1", "arr2"];

const firstLevUl = document.getElementById("myList");

// livello1 (annidamento)
for( let i = 0 ; i < firstArr.lenght; i++){
    // estrapolo contenuto iesimo del primo array
    let firstLevContent = firstArr[i];
    // mi creo il LI di primo livello 
    let firstLevLi = document.createElement("li");
    // inserire il contenuto del li, primo livello
    firstLevLi.append(firstLevContent);
    // inserisco il li di primo livello 
    firstLevUl.append(firstLevLi);


    // UL DI SECONDO LIVELLO: mi serve qui fuori senno fa piu ul annidati ogni li primareio
    let secondLevUl = document.createElement("ul");

    // livello 2 (annidamento)
    for( let j = 0 ; j < secondArr.lenght; j++){
        // estrapolo contenuto iesimo del secondo array
        let secondLevContent = secondArr[j];
        // mi creo il LI di secondo livello
        let secondLevLi = document.createElement("li");
        // inserisco il contenuto del LI, secondo livello
        secondLevLi.append(secondLevContent);
        // inserisco il LI di secondo livello nel UL di secondo livello
        secondLevUl.append(secondLevLi);
        // inserisco UL di secondo livello nel LI di primo livello
        firstLevLi.append(secondLevUl);

  }

}
