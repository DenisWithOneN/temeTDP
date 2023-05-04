function initSquares() {

    let rows = 8;
    let columns = 8;

    for(i = 0; i<columns; i++)
        for(j = 0; j<rows; j++){

            let chessSquare = {

                x: j * 50 + 50,
                y: i * 50 + 50,
                size: 50,
            };
            chessTable.push(chessSquare);
        }
}

function createSquares() {

    for (let i = 0; i < chessTable.length; i++) {
        let Square = chessTable[i];
        square(Square.x, Square.y, Square.size);
    }
}