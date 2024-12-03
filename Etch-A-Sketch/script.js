const btn = document.querySelector("#input1");
let side = 0;

btn.addEventListener("click", () => {
    side = prompt("Enter the side of the square grid");
    if(side > 100)
    {
        alert("Please enter a value less than 100");
        side = 0;
    }

    let div = document.querySelector(".container");
    div.textContent = '';
    let size = 960/side;
    if(side!=0)
    {
        for(let row=0;row<side;row++)
        {
            row_div = document.createElement("div");
            div.appendChild(row_div);
            for(let column=0;column<side;column++)
            {
                column_div = document.createElement("div");
                column_div.classList.add("box");
                column_div.style.cssText = `outline: 1px solid black; height: ${size}px; width: ${size}px;`;
                row_div.appendChild(column_div);
            }
        }
    }

    let rainbow_val=0,eraser_val=0,draw_val=1;
    let rainbow = document.querySelector("#input2");
    rainbow.addEventListener("click", () => {
        rainbow_val = 1;
        eraser_val = 0;
        draw_val = 0;
    });
    let eraser = document.querySelector("#input3");
    eraser.addEventListener("click", () => {
        eraser_val = 1;
        rainbow_val = 0;
        draw_val = 0;
    });
    let draw = document.querySelector("#input4");
    draw.addEventListener("click", () => {
        eraser_val = 0;
        rainbow_val = 0;
        draw_val = 1;
    });

    hover = [...document.querySelectorAll(".box")].forEach(function(box){
        box.addEventListener("mouseover", () => {
            if(eraser_val == 1){
                box.style.cssText = `background-color: white; outline: solid 1px black; height: ${size}px; width: ${size}px;`;
            }
            else if(rainbow_val == 1){
                let letters = '0123456789ABCDEF';
                let color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                box.style.cssText = `background-color: ${color}; outline: solid 1px black; height: ${size}px; width: ${size}px;`;
            }
            else{
                box.style.cssText = `background-color: black; outline: solid 1px black; height: ${size}px; width: ${size}px;`;
            }
        });
    });
    
});


