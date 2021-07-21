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

    const [resultMessage, setResultMessage] = useState("")

    useEffect(() => {
        chooseWinner()
    }, [housePicked, playerWins, houseWins])

    const array = [
        {
            id: 1,
            img: paperImg,
            class: "paper",
            name: "paper"
        },
        {
            id: 0,
            img: rockImg,
            class: "rock",
            name: "rock"
        },
        {
            id: 2,
            img: scissorsImg,
            class: "scissors",
            name: "scissors"
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
    }

    function chooseWinner() {
        if(housePicked !== null) {
            if (housePicked.class === "paper" && playerPicked === "scissors") {
                setPlayerWins(true)
                setHouseWins(false)
                console.log("Ganhou")
            } else if (housePicked.class === "scissors" && playerPicked === "rock") {
                setPlayerWins(true)
                setHouseWins(false)
                console.log("ganhou")
            } else if (housePicked.class === "rock" && playerPicked === "paper") {
                setPlayerWins(true)
                setHouseWins(false)
                console.log("ganhou")
            } else if (housePicked.class === "rock" && playerPicked === "scissors") {
                setPlayerWins(false)
                setHouseWins(true)
                console.log("Perdeu")
            } else if (housePicked.class === "scissors" && playerPicked === "paper") {
                setPlayerWins(false)
                setHouseWins(true)
                console.log("Perdeu")
            } else if (housePicked.class === "paper" && playerPicked === "rock") {
                setPlayerWins(false)
                setHouseWins(true)
                console.log("Perdeu")
            } else {
                console.log("Empate")
            }

            if (playerWins) {
                setResultMessage("You Win")
            } else if(houseWins){
                setResultMessage("You Lose")
            } else {
                setResultMessage("Tie")
            }
        }
    }

    return(
        <div className="container">
            <Header />
            
            <div className={playerId !== null ? "play width" : "play"}>
                {playerId !== null ?
                    <div className="result-wrapper">
                        <div className="your-pick">
                            <Button className={"button " + "picked " + playerPicked} key={playerId}>
                                <div>
                                    <img src={playerImage} alt={playerImage} />
                                </div>
                            </Button>
                        </div>

                        <div className="result">
                            <h3>{resultMessage}</h3>
                            <button onClick={handlePlayAgain} className="play-again">Play Again</button>
                        </div>

                        <div className="house-pick">
                            <>
                                <Button className={"button " + "house-picked " + housePicked.class} key={housePicked.id}>
                                    <div>
                                        <img src={housePicked.img} alt={housePicked.img} />
                                    </div>
                                </Button>
                            </>
                        </div>
                    </div>
                :
                    <>
                        <img src={bgTriangleImg} alt={bgTriangleImg} />
                        {
                            array.map((item) => {
                                return(
                                    <>
                                        <Button 
                                            className={"button " + item.class} 
                                            key={item.id} 
                                            onClick={() => handlePlay(item)}
                                            >
                                            <div>
                                                <img src={item.img} alt={item.img} />
                                            </div>
                                        </Button>
                                    </>
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