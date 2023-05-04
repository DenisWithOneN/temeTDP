function initSquares() {
  let rows = 8;
  let columns = 8;
  let c1;
  let c2;

  for (i = 0; i < rows; i++) {
    if (i % 2 == 0) {
      c1 = 255;
      c2 = 0;
    } else {
      c1 = 0;
      c2 = 255;
    }

    for (j = 0; j < columns; j++) {
      if (j % 2 == 0) {
        let chessSquare = {
          x: j * 50 + 50,
          y: i * 50 + 50,
          size: 50,
          color: color(c1, c1, c1),
        };
        chessTable.push(chessSquare);
      } else {
        let chessSquare = {
          x: j * 50 + 50,
          y: i * 50 + 50,
          size: 50,
          color: color(c2, c2, c2),
        };
        chessTable.push(chessSquare);
      }
    }
  }
}

function createSquares() {
  for (let i = 0; i < chessTable.length; i++) {
    let Square = chessTable[i];
    fill(Square.color);
    square(Square.x, Square.y, Square.size);
  }
}
