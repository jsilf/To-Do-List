
let toDoContent = document.getElementById("toDoContent");

/*--------------- 
RENDER TO DO LIST
-----------------*/
export function renderToDo() {
    toDoContent.innerHTML = "";
    let toDoList = document.createElement("ul");

    let listFromLS = getToDo();

    for (let i = 0; i < listFromLS.length; i++) {

        let toDoItem = document.createElement("li");
        toDoItem.id = i;
        toDoItem.innerHTML = listFromLS[i];
        toDoList.append(toDoItem);

        /*----------------- 
        ICON TO DELETE ITEM
        -------------------*/
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

/*---------- 
LOCALSTORAGE
------------*/
export function getToDo() {
    let getThings = localStorage.getItem("saveThings");

    if (getThings) {
        getThings = JSON.parse(getThings);
    } else {
        getThings = [];
    }
    return getThings;
}