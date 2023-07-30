import "./Chessboard.css";

// Algebraic chess notation for row and columns like an X and Y axis
const HorizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const VerticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Chessboard() {
    let board = [];

    // Combines the horizontal and vertical axis in algebraic chess notation in a new array
    VerticalAxis.toReversed().forEach((boardNumber) => {
        HorizontalAxis.forEach((boardLetter) => {
            board.push(boardLetter + boardNumber);
        });
    });

    // Creates new divs for each element in board array for board peices
    // also decides color based on index
    const boardPieces = board.map((boardPiece, index) => {
        const row = Math.floor(index / 8); // Calculate the row number
        const col = index % 8; // Calculate the column number
        console.log(index, row, col);

        // Determine the color of the square based on row and column
        const isWhiteSquare = (row + col) % 2 === 0;
        return (
            <div
                className={`board-piece ${
                    isWhiteSquare ? "white-piece" : "black-piece"
                }`}
                key={boardPiece}>
                {boardPiece}
            </div>
        );
    });
    return <div className="board">{boardPieces}</div>;
}
