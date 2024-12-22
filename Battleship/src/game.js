export function gameStart(player1, compPlayer){
    let cells = document.querySelectorAll(".board2 > .board > .row > .cell");
    cells.forEach(cell => {
        cell.addEventListener("click", function eventHandler(){
            let heading = document.querySelector(".heading > p");
            if(heading.textContent != "BATTLESHIP")
                return;
            
            let row = event.target.id.split("-")[1];
            let col = event.target.id.split("-")[2];
            
            if(row == null || col == null)
                return;
            
            let data = compPlayer.receiveAttack(row,col);
            if(data == 2)
                return;
            else if(data == 1){
                let cell = document.querySelector("#"+event.target.id);
                cell.textContent = "X";
                cell.classList.add("hit");
            }
            else if(data == 0){
                let cell = document.querySelector("#"+event.target.id);
                cell.innerHTML = '<svg width="45" height="45"><circle cx="22.5" cy="22.5" r="10" fill="blue" /></svg>';
                cell.classList.add("miss");
            }

            if(compPlayer.ships.every((x) => x.isSunk() == true) == true){
                heading.textContent = player1.name.toUpperCase() + " WINS!!!";
            }

            if(data == 1)
                return;

            while(true){
                let flag = 0;
                while(true){
                    row = Math.floor(Math.random()*10);
                    col = Math.floor(Math.random()*10);
    
                    data = player1.receiveAttack(row,col);
                    if(data != 2){
                        if(data == 1){
                            cell = document.querySelector("#c1-"+""+row+"-"+""+col);
                            cell.classList.add("hit");
                            cell.textContent = "X";
                            flag = 1;
                            break;
                        }
                        else if(data == 0){
                            cell = document.querySelector("#c1-"+""+row+"-"+""+col);
                            cell.innerHTML = '<svg width="45" height="45"><circle cx="22.5" cy="22.5" r="10" fill="blue" /></svg>';
                            cell.classList.add("miss");
                            break;
                        }
                    }
                }
                if(flag != 1)
                    break;
            }

            if(player1.ships.every((x) => x.isSunk() == true) == true){
                heading.textContent = "COMPUTER WINS!!!";
            }
        });
    });
}
