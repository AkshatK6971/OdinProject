import { createShip } from "./ship";

class Player{
    constructor(name){
        this.name = name;
        this.board = createBoard();
        this.ships = [];

        let length;
        for(let i=0;i<5;i++){
            if(i<1)
                length = 5;
            else if(i<2)
                length = 4;
            else if(i<3)
                length = 3;
            else    
                length = 2;
            let ship = createShip(length);
            this.ships.push(ship);
        }
    }

    randomizeShips(){
        this.board = createBoard();
        for(let i=0;i<5;i++){
            let ship = this.ships[i];
            let length = ship.length;

            let dir = Math.floor(Math.random() * 2);

            if(dir == 1){
                let col = Math.floor(Math.random()*10);
                let row = Math.floor(Math.random()*(10-length));
                let count=0;

                for(let j=row;j<10;j++){
                    if(this.board[j][col] == " "){
                        count++;
                    }
                    else
                        break;

                    if(count == length)
                        break;
                }

                if(count != length){
                    i--;
                    continue;
                }
                
                count = 0;
                for(let j=row;j<10;j++){
                    this.board[j][col] = "" + i;
                    count++;

                    if(count == length)
                        break;
                }

                if(col != 0 && col != 9 && row != 0 && row+length != 10){
                    let row_res = row - 1;
                    for(let i=col-1;i<=col+1;i++){
                        this.board[row_res][i] = "X";
                        this.board[row_res+length+1][i] = "X";
                    }
                    for(let i=row-1;i<=row+length;i++){
                        this.board[i][col-1] = "X";
                        this.board[i][col+1] = "X";
                    }
                }
                
                else if(col == 0){
                    if(row == 0){
                        let row_res = row - 1;
                        for(let i=col;i<=col+1;i++){
                            this.board[row_res+length+1][i] = "X";
                        }
                        for(let i=row;i<=row+length;i++){
                            this.board[i][col+1] = "X";
                        }
                    }
                    else if(row+length == 10){
                        let row_res = row - 1;
                        for(let i=col;i<=col+1;i++){
                            this.board[row_res][i] = "X";
                        }
                        for(let i=row-1;i<row+length;i++){
                            this.board[i][col+1] = "X";
                        }
                    }
                    else{
                        let row_res = row - 1;
                        for(let i=col;i<=col+1;i++){
                            this.board[row_res][i] = "X";
                            this.board[row_res+length+1][i] = "X";
                        }
                        for(let i=row-1;i<=row+length;i++){
                            this.board[i][col+1] = "X";
                        }
                    }
                }

                else if(col == 9){
                    if(row == 0){
                        let row_res = row - 1;
                        for(let i=col-1;i<=col;i++){
                            this.board[row_res+length+1][i] = "X";
                        }
                        for(let i=row-1;i<=row+length;i++){
                            this.board[i][col-1] = "X";
                        }
                    }
                    else if(row+length == 10){
                        let row_res = row - 1;
                        for(let i=col-1;i<=col;i++){
                            this.board[row_res][i] = "X";
                        }
                        for(let i=row-1;i<row+length;i++){
                            this.board[i][col-1] = "X";
                        }
                    }
                    else{
                        let row_res = row - 1;
                        for(let i=col-1;i<=col;i++){
                            this.board[row_res][i] = "X";
                            this.board[row_res+length+1][i] = "X";
                        }
                        for(let i=row-1;i<=row+length;i++){
                            this.board[i][col-1] = "X";
                        }
                    }
                }

                else if(row == 0){
                    let row_res = row - 1;
                    for(let i=col-1;i<=col+1;i++){
                        this.board[row_res+length+1][i] = "X";
                    }
                    for(let i=row;i<=row+length;i++){
                        this.board[i][col-1] = "X";
                        this.board[i][col+1] = "X";
                    }
                }

                else if(row == 9){
                    let row_res = row - 1;
                    for(let i=col-1;i<=col+1;i++){
                        this.board[row_res][i] = "X";
                    }
                    for(let i=row-1;i<row+length;i++){
                        this.board[i][col-1] = "X";
                        this.board[i][col+1] = "X";
                    }
                }
            }
            else{
                let col = Math.floor(Math.random()*(10-length));
                let row = Math.floor(Math.random()*10);
                let count=0;

                for(let j=col;j<10;j++){
                    if(this.board[row][j] == " "){
                        count++;
                    }
                    else
                        break;
                    
                    if(count == length)
                            break;
                }

                if(count != length){
                    i--;
                    continue;
                }
                
                count=0;
                for(let j=col;j<10;j++){
                    this.board[row][j] = "" + i;
                    count++;

                    if(count == length)
                        break;
                }

                if(row != 0 && row != 9 && col != 0 && col+length != 10){
                    let col_res = col - 1;
                    for(let i=row-1;i<=row+1;i++){
                        this.board[i][col_res] = "X";
                        this.board[i][col_res+length+1] = "X";
                    }
                    for(let i=col-1;i<=col+length;i++){
                        this.board[row-1][i] = "X";
                        this.board[row+1][i] = "X";
                    }
                }

                else if(row == 0){
                    if(col == 0){
                        let col_res = col - 1;
                        for(let i=row;i<=row+1;i++){
                            this.board[i][col_res+length+1] = "X";
                        }
                        for(let i=col;i<=col+length;i++){
                            this.board[row+1][i] = "X";
                        }
                    }
                    else if(col+length == 10){
                        let col_res = col - 1;
                        for(let i=row;i<=row+1;i++){
                            this.board[i][col_res] = "X";
                        }
                        for(let i=col-1;i<col+length;i++){
                            this.board[row+1][i] = "X";
                        }
                    }
                    else{
                        let col_res = col - 1;
                        for(let i=row;i<=row+1;i++){
                            this.board[i][col_res] = "X";
                            this.board[i][col_res+length+1] = "X";
                        }
                        for(let i=col-1;i<=col+length;i++){
                            this.board[row+1][i] = "X";
                        }
                    }
                }

                else if(row == 9){
                    if(col == 0){
                        let col_res = col - 1;
                        for(let i=row-1;i<=row;i++){
                            this.board[i][col_res+length+1] = "X";
                        }
                        for(let i=col;i<=col+length;i++){
                            this.board[row-1][i] = "X";
                        }
                    }
                    else if(col+length == 10){
                        let col_res = col - 1;
                        for(let i=row-1;i<=row;i++){
                            this.board[i][col_res] = "X";
                        }
                        for(let i=col-1;i<col+length;i++){
                            this.board[row-1][i] = "X";
                        }
                    }
                    else{
                        let col_res = col - 1;
                        for(let i=row-1;i<=row;i++){
                            this.board[i][col_res] = "X";
                            this.board[i][col_res+length+1] = "X";
                        }
                        for(let i=col-1;i<=col+length;i++){
                            this.board[row-1][i] = "X";
                        }
                    }
                }

                else if(col == 0){
                    let col_res = col - 1;
                    for(let i=row-1;i<=row+1;i++){
                        this.board[i][col_res+length+1] = "X";
                    }
                    for(let i=col;i<=col+length;i++){
                        this.board[row-1][i] = "X";
                        this.board[row+1][i] = "X";
                    }
                }

                else if(col == 9){
                    let col_res = col - 1;
                    for(let i=row-1;i<=row+1;i++){
                        this.board[i][col_res] = "X";
                    }
                    for(let i=col-1;i<col+length;i++){
                        this.board[row-1][i] = "X";
                        this.board[row+1][i] = "X";
                    }
                }
            }
        }
    }

    resetBoard(){
        for(let i=0;i<10;i++){
            for(let j=0;j<10;j++){
                this.board[i][j] = " ";
            }
        }
    }

    receiveAttack(row,col){
        if(this.board[row][col] != '.' && this.board[row][col] != 'H'){
            if(this.board[row][col] == " " || this.board[row][col] == 'X'){
                this.board[row][col] = ".";
                return 0;
            }    
            else{
                let index = this.board[row][col];
                this.ships[index].hitShip();
                this.board[row][col] = "H";
                return 1;
            }
        }
        else
            return 2;
    }
}

const createBoard = () => {
    let board = [];
    for(let i=0;i<10;i++){
        let board_row = [" "," "," "," "," "," "," "," "," "," "];
        board.push(board_row);
    }
    return board;
}

const createPlayer = (name) => {
    return new Player(name);
}

export {createPlayer};