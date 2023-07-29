import "./Chessboard.css";

const HorizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const VerticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Chessboard() {
    let board = [];

    for (let j = VerticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < HorizontalAxis.length; i++) {
            const divisor = j + i;

            if (divisor % 2 === 0) {
                board.push(
                    <div
                        className="board-piece black-piece"
                        key={HorizontalAxis[i] + VerticalAxis[j]}>
                        [{HorizontalAxis[i]}
                        {VerticalAxis[j]}]
                    </div>
                );
            } else {
                board.push(
                    <div
                        className="board-piece white-piece"
                        key={HorizontalAxis[i] + VerticalAxis[j]}>
                        [{HorizontalAxis[i]}
                        {VerticalAxis[j]}]
                    </div>
                );
            }
        }
    }
    return <div className="board">{board}</div>;
}
