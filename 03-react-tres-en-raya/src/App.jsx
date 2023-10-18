import './App.css'
import {useState} from "react";
import confietti from "canvas-confetti"

import {Square} from "./components/Square.jsx";
import {TURNS} from "./constants.js";
import {checkWinnerFrom} from "./logic/board.js";
import {WinnerModal} from "./components/WinnerModal.jsx";
import {checkEndGame} from "./logic/board.js";

function App() {

    const [board,setBoard] = useState( () => {
        const boardFromStorage = window.localStorage.getItem('board')
        if (boardFromStorage) return JSON.parse(boardFromStorage)
        return Array(9).fill(null)
    })
    const [turn,setTurn] = useState(()=>{
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ?? TURNS.X
    })
    const [winner,setWinner] = useState(null) //null no ganador, false empate, true win

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)

        localStorage.removeItem('board')
        localStorage.removeItem('turn')
    }
    const updateBoard = (index) => {
        if (board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        window.localStorage.setItem('board',JSON.stringify(newBoard))
        window.localStorage.setItem('turn',JSON.stringify(turn))

        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner){
            confietti()
            setWinner(newWinner)
        }else if (checkEndGame(newWinner)){
            setWinner(false)
        }
    }

    return (
        <main className="board">
            <h1> tic tac toe</h1>
            <button onClick={resetGame}>Reset del game</button>
            <section className="game">
                {
                    board.map((square, index) => {
                        return (
                          <Square
                          key={index}
                          index={index}
                          updateBoard={updateBoard}
                          >
                              {square}
                          </Square>
                        )
                    })
                }
            </section>

            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>

           <WinnerModal winner={winner} resetGame={resetGame}/>
        </main>
    )
}

export default App
