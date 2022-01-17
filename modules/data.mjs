//För att lägga till en ny item till en lista.
//För att radera en item.
//För att markera en item som “klar”.

let toDoContent = document.getElementById("toDoContent");

/*------------------- 
Rendera to do listan
---------------------*/
export function renderToDo() {
    toDoContent.innerHTML = "";
    let toDoList = document.createElement("ul");

    let listFromLS = getToDo();

    for (let i = 0; i < listFromLS.length; i++) {

        let toDoItem = document.createElement("li");
        toDoItem.id = i;
        toDoItem.innerHTML = listFromLS[i];
        toDoList.append(toDoItem);

        /*----------------------------------------------------- 
        Ikon som sedan används nedan för att ta bort listobjekt
        samt bocka av med knapp
        -------------------------------------------------------*/

        let iconDone = document.createElement("i");
        iconDone.className = "fas fa-circle";
        iconDone.id = i;
        toDoItem.prepend(iconDone);

        iconDone.addEventListener("click", () => {

            let lineThrough = toDoItem;
            localStorage.setItem("saveLineThrough", lineThrough);
            lineThrough.style.textDecoration = "line-through 2px";

            //localstorage på style fungerar ej
        });

        let icon = document.createElement("i");
        icon.className = "far fa-circle";
        icon.id = i;
        toDoItem.prepend(icon);
        icon.innerHTML = "";

        icon.addEventListener("click", (evt) => {
            listFromLS.splice(evt.target.id, 1);
            localStorage.setItem("saveThings", JSON.stringify(listFromLS));
            renderToDo();
        });
    }
    toDoContent.append(toDoList);
}

//Hämta alla listor och items.
export function getToDo() {

    let getThings = localStorage.getItem("saveThings");
    // let getLine = localStorage.getItem("saveLineThrough");

    if (getThings) {
        getThings = JSON.parse(getThings);
    } else {
        getThings = [];
    }
    return getThings;
}




