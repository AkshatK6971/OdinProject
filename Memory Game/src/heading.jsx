/* eslint-disable react/prop-types */

function Heading({score, bestScore}){
    const handleClick = () => {
        event.preventDefault();
        location.reload();
    }

    return(
        <header>
            {score == 20 && 
            <>
                <h1>You Win The Game!!!</h1>
                <button type="submit" onClick={handleClick}>Replay</button>
            </>}
            {score != 20 && 
            <>
                <h1>Pokemon Memory Game</h1>
                <h3>Click On Each Pokemon Only Once!!!</h3>
                <div className="scores">
                    <h3>Current Score : {score}</h3>
                    <h3>Best Score: {bestScore}</h3>
                </div>
            </> }
        </header>
    )
}

export default Heading