import { useState, useEffect } from 'react';

import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'

import '../styles/home.css'

import paperImg from '../images/paper.svg'
import rockImg from '../images/rock.svg'
import scissorsImg from '../images/scissors.svg'
import bgTriangleImg from '../images/bg-triangle.svg'

export const Home = () => {
    const [playerPicked, setPlayerPicked] = useState(null)
    const [playerId, setPlayerId] = useState(null)
    const [playerImage, setPlayerImage] = useState(null)

    let [housePicked, setHousePicked] = useState(null)

    const [playerWins, setPlayerWins] = useState(false)
    const [houseWins, setHouseWins] = useState(false)
    const [time, setTime] = useState(false)

    const [resultMessage, setResultMessage] = useState("")
    const [score, setScore] = useState(0)

    useEffect(() => {
        setTimeout(() => setTime(true), 3000)
        chooseWinner()
    }, [housePicked, playerWins, houseWins])

    const array = [
        {
            id: 1,
            img: paperImg,
            class: "paper"
        },
        {
            id: 0,
            img: rockImg,
            class: "rock"
        },
        {
            id: 2,
            img: scissorsImg,
            class: "scissors"
        }
    ]

    function handlePlay(item) {
        setPlayerPicked(item.class)
        setPlayerId(item.id)
        setPlayerImage(item.img)

        let chooseRandom = array[(Math.random() * 2).toFixed(0)]
        setHousePicked(chooseRandom)
    }

    function handlePlayAgain(){
        setPlayerPicked(null)
        setPlayerId(null)
        setPlayerImage(null)
        setHousePicked(null)

        setPlayerWins(false)
        setHouseWins(false)
        setTime(false)
    }

    function chooseWinner() {
        if(housePicked !== null) {
            if (housePicked.class === "paper" && playerPicked === "scissors") {
                setPlayerWins(true)
                setHouseWins(false)
            } else if (housePicked.class === "scissors" && playerPicked === "rock") {
                setPlayerWins(true)
                setHouseWins(false)
            } else if (housePicked.class === "rock" && playerPicked === "paper") {
                setPlayerWins(true)
                setHouseWins(false)
            } else if (housePicked.class === "rock" && playerPicked === "scissors") {
                setPlayerWins(false)
                setHouseWins(true)
            } else if (housePicked.class === "scissors" && playerPicked === "paper") {
                setPlayerWins(false)
                setHouseWins(true)
            } else if (housePicked.class === "paper" && playerPicked === "rock") {
                setPlayerWins(false)
                setHouseWins(true)
            }

            if (playerWins) {
                setResultMessage("You Won")
                setScore(score + 1)
            } else if(houseWins){
                setResultMessage("You Lost")
                setScore(score - 1)
            } else {
                setResultMessage("Tied")
            }
        }
    }

    return(
        <div className="container">
            <Header score={score} />

            <div className={playerId !== null ? "play width" : "play"}>
                {playerId !== null ?
                    <div className="result-wrapper">
                        <div className="your-pick">
                            <h3>You picked</h3>
                            <Button className={`button picked ${playerPicked}`}>
                                <div>
                                    <img src={playerImage} alt={playerImage} />
                                </div>
                            </Button>
                        </div>

                            {time && (
                                <div className="result">
                                    <h3>{resultMessage}</h3>
                                    <button onClick={handlePlayAgain} className="play-again">Play Again</button>
                                </div>
                            )}

                        <div className="house-pick">
                            <h3>The house picked</h3>
                            {time ? (
                                <>
                                    <Button className={`button house-picked ${housePicked.class}`}>
                                        <div>
                                            <img src={housePicked.img} alt={housePicked.img}/>
                                        </div>
                                    </Button> 
                                </>
                            ) : <Button className={`button house-picked time`}><div><p>Loading...</p></div></Button>}
                        </div>
                    </div>
                :
                    <>
                        <img src={bgTriangleImg} alt={bgTriangleImg} />
                        {
                            array.map((item) => {
                                return(
                                    <div key={item.id}>
                                        <Button
                                            className={`button ${item.class}`}
                                            onClick={() => handlePlay(item)}
                                            >
                                            <div>
                                                <img src={item.img} alt={item.img}/>
                                            </div>
                                        </Button>
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>

            <Footer />
        </div>
    )
}