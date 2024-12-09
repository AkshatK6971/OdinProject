function createMenu() {
    let content = document.querySelector("#content");
    content.textContent = "";

    let div = document.createElement("div");
    div.classList.add("menu");

    let list = document.createElement("ul");

    let item = document.createElement("li");
    item.textContent = "Chole Bhature";
    list.appendChild(item);
    item = document.createElement("li");
    item.textContent = "Pav Bhaji";
    list.appendChild(item);
    item = document.createElement("li");
    item.textContent = "Grilled Sandwich";
    list.appendChild(item);
    item = document.createElement("li");
    item.textContent = "Paneer Roll";
    list.appendChild(item);
    item = document.createElement("li");
    item.textContent = "Cheese Burger";
    list.appendChild(item);

    div.appendChild(list);
    content.appendChild(div);
}

export default createMenu;