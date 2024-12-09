function createContact() {
    let content = document.querySelector("#content");
    content.textContent = "";

    let div = document.createElement("div");
    div.classList.add("contact");

    let form = document.createElement("form");

    let class_input = document.createElement("div");
    class_input.classList.add("input");
    let label = document.createElement("label");
    label.setAttribute("for","name");
    label.textContent = "Name: ";
    let input = document.createElement("input");
    input.id = "name";
    input.setAttribute("type","text");
    class_input.appendChild(label);
    class_input.appendChild(input);
    form.appendChild(class_input);

    class_input = document.createElement("div");
    class_input.classList.add("input");
    label = document.createElement("label");
    label.setAttribute("for","number");
    label.textContent = "Number: ";
    input = document.createElement("input");
    input.id = "number";
    input.setAttribute("type","number");
    class_input.appendChild(label);
    class_input.appendChild(input);
    form.appendChild(class_input);

    div.appendChild(form);

    let button = document.createElement("button");
    button.textContent = "Submit";
    div.appendChild(button);

    content.appendChild(div);
}

export default createContact;