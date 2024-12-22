import { gameStart } from "./game";
import { createPlayer } from "./player";

export function domStart(){
    let player;
    let submitbtn = document.querySelector("#submit");
    submitbtn.addEventListener("click", () => {
        event.preventDefault();
        let input = document.querySelector("#name");

        if(input.value == "" || input.value == null)
            player = "Player1";
        else{
            player = input.value;
        }
        
        let player1 = createPlayer(player);
        player1.randomizeShips();

        let compPlayer = createPlayer("Computer");
        compPlayer.randomizeShips();
        renderBoards(player1,compPlayer);
    });
}

function renderBoards(player1,compPlayer){
    let content = document.querySelector(".content");
    content.textContent = "";

    let boards = document.createElement("div");
    boards.classList.add("boards");

    let div1 = document.createElement("div");
    div1.classList.add("board1");
    let p1 = document.createElement("p");
    p1.textContent = player1.name.toUpperCase() + "'S BOARD";
    div1.appendChild(p1);

    let board1 = document.createElement("div");
    board1.classList.add("board");
    for(let i=0;i<10;i++){
        let row1_div = document.createElement("div");
        row1_div.classList.add("row");
        for(let j=0;j<10;j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = "c1" + "-"+ "" + i + "-" + "" + j;
            if(player1.board[i][j] != " " && player1.board[i][j] != "X"){
                cell.textContent = "X";
                cell.classList.add("ship");
            }
            row1_div.appendChild(cell);
        }
        board1.appendChild(row1_div);
    }
    div1.appendChild(board1);

    let div2 = document.createElement("div");
    div2.classList.add("board2");
    let p2 = document.createElement("p");
    p2.textContent = "COMPUTER'S BOARD";
    div2.appendChild(p2);

    let board2 = document.createElement("div");
    board2.classList.add("board");
    for(let i=0;i<10;i++){
        let row2_div = document.createElement("div");
        row2_div.classList.add("row");
        for(let j=0;j<10;j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = "c2" + "-"+ "" + i + "-" + "" + j;
            row2_div.appendChild(cell);
        }
        board2.appendChild(row2_div);
    }
    div2.appendChild(board2);

    boards.appendChild(div1);
    boards.appendChild(div2);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    let rearrangebtn = document.createElement("button");
    rearrangebtn.id = "rearrange";
    rearrangebtn.textContent = "Rearrange";
    rearrangebtn.addEventListener("click", () => {
        player1.resetBoard();
        player1.randomizeShips();
        let board1 = document.querySelector(".board1 > .board");
        board1.textContent = "";
        for(let i=0;i<10;i++){
            let row1_div = document.createElement("div");
            row1_div.classList.add("row");
            for(let j=0;j<10;j++){
                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.id = "c1" + "-"+ "" + i + "-" + "" + j;
                if(player1.board[i][j] != " " && player1.board[i][j] != "X"){
                    cell.textContent = "X";
                    cell.classList.add("ship");
                }
                row1_div.appendChild(cell);
            }
            board1.appendChild(row1_div);
        }
    });
    let startbtn = document.createElement("button");
    startbtn.id = "start";
    startbtn.textContent = "Start";
    startbtn.addEventListener("click",() => {
        let buttons = document.querySelector(".buttons");
        buttons.textContent = "";

        let restartbtn = document.createElement("button");
        restartbtn.id = "restart";
        restartbtn.textContent = "Restart";
        buttons.appendChild(restartbtn);
        restartbtn.addEventListener("click",() =>{
            let heading = document.querySelector(".heading > p");
            heading.textContent = "BATTLESHIP";
            let player2 = createPlayer(player1.name);
            player2.randomizeShips();

            let compPlayer2 = createPlayer(compPlayer.name);
            compPlayer2.randomizeShips();
            renderBoards(player2,compPlayer2);
        });
        gameStart(player1, compPlayer);
    });

    buttons.appendChild(rearrangebtn);
    buttons.appendChild(startbtn);

    content.appendChild(boards);
    content.appendChild(buttons);
}

