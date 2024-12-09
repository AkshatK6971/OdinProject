const gameBoard = (function(){
    let board = ["","","","","","","","",""];

    const getBoard = () => board;

    const resetBoard = () => {
        board = ["","","","","","","","",""];
    }

    const updateBoard = (index,token) => {
        let id = parseInt(index.slice(1));
        if(board[id] == ""){
            board[id] = token;
            let cell = document.querySelector(`#${index}`);
            cell.textContent = token;
            return true;
        }
        else{
            return false;
        }    
    }

    return{
        getBoard,
        updateBoard,
        resetBoard,
    };
})();

const player = (name,token) => {
    return {name,token};
};

const gamePlay = (function(){
    let players = [];
    let playerTurn = 0;
    let gameActive = true;

    const setupGame = (player1,player2) => {
        players = [player(player1,"X"),player(player2,"O")];
        playerTurn = 0;
        gameActive = true;
        gameBoard.resetBoard();
    }

    const currentPlayerTurn = () => {
        return players[playerTurn];
    }    
    
    const switchPlayerTurn = () => {
        if(playerTurn == 0)
            playerTurn = 1;
        else
            playerTurn = 0;
    }

    const playGame = (currentPlayerChoice) => {
        const currentPlayer = currentPlayerTurn();
        const index = currentPlayerChoice;

        if(gameBoard.updateBoard(index,currentPlayer.token)){

            if(checkWin(currentPlayer.token)){
                let heading = document.querySelector("#heading");
                heading.textContent = `${currentPlayer.name} wins!!!`;
                gameActive = false;
            }
            else if(checkDraw()){
                let heading = document.querySelector("#heading");
                heading.textContent = "TIE!!!";
                gameActive = false;
            }
            else{
                switchPlayerTurn();
            }
        }
    }

    const checkDraw = () => {
        let board = gameBoard.getBoard();
        for(let i=0;i<9;i++){
            if(board[i] === "")
                return false;
        }
        return true;
    }

    const checkWin = (token) => {
        winningCombo = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        let board = gameBoard.getBoard();
        for(let i=0;i<8;i++){
            const [a,b,c] = winningCombo[i];
            if(board[a] == board[b] && board[b] == board[c] && board[a] == token)
                return true;
        }
        return false;
    }

    const handleRestart = () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach(element => {
            element.textContent = "";
        });
        let heading = document.querySelector("#heading");
        heading.textContent = "Tic-Tac-Toe";
        gamePlay.setupGame(players[0].name,players[1].name);
    }

    const handleClick = () => {
        if(!gameActive)
            return;
        gamePlay.playGame(event.target.id);
    }

    return{
        setupGame,
        playGame,
        handleClick,
        handleRestart,
    };
})();

const screenManager = (function(){
    let content = document.querySelector(".content");
    const startGame = () => {
        let submitbtn = document.querySelector("button");
        submitbtn.addEventListener("click", (event) => {
            event.preventDefault();
            let input1 = document.querySelector("#player1_name");
            let player1_name = input1.value;
            let input2 = document.querySelector("#player2_name")
            let player2_name = input2.value;

            gamePlay.setupGame(player1_name,player2_name);
            displayGrid(player1_name,player2_name);
        });
    }

    const displayGrid = (player1_name,player2_name) => {
        content.textContent = "";
        let board = document.createElement("div");
        board.classList.add("board");
        content.appendChild(board);

        let count = 0;
        for(let i=0;i<3;i++){
            let row = document.createElement("div");
            row.classList.add("row");
            row.id = `row-${i}`;
            for(let j=0;j<3;j++){
                let cell = document.createElement("div");
                cell.classList.add("cell");
                let temp = "" + count;
                cell.id = "c" + temp;
                cell.addEventListener("click", gamePlay.handleClick);
                row.appendChild(cell);
                count++;
            }
            board.appendChild(row);
        }
        let restartbtn = document.createElement("button");
        restartbtn.id = "restart";
        restartbtn.textContent = "Restart";
        restartbtn.addEventListener("click", gamePlay.handleRestart);
        board.appendChild(restartbtn);
    }

    return{
        startGame,
    };
})();


screenManager.startGame();
