class Ship{
    constructor(length){
        this.length = length;
        this.health = length;
    }

    hitShip(){
        if(this.health > 0)
            this.health--;  
    }

    isSunk(){
        if(this.health == 0)
            return true;
        else   
            return false;
    }
}

const createShip = (length) => {
    return new Ship(length);
}

export {createShip};