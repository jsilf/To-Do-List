import { renderToDo, getToDo } from './modules/data.mjs';

let addInput = document.getElementById("addInput");
let saveBtn = document.getElementById("saveBtn");
saveBtn.innerText = "Lägg till";

renderToDo();

/*-----------------
Lägga till i listan
-------------------*/
saveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let addInputValue = addInput.value;

    let toDoList = getToDo();

    if (addInputValue === '') {
        alert("Skriv något först!");
    } else {
        toDoList.unshift(addInputValue);
        localStorage.setItem("saveThings", JSON.stringify(toDoList));
    };

    document.getElementById("addInput").value = "";//nollställ input efter klick

    renderToDo();
});





