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
    const [id, setId] = useState(null)
    const [image, setImage] = useState(null)

    let [housePicked, setHousePicked] = useState(null)

    const [playerWins, setPlayerWins] = useState(false);

    const [resultMessage, setResultMessage] = useState("")

    // useEffect(() => {}, [housePicked])

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
        setId(item.id)
        setPlayerPicked(item.class)
        setImage(item.img)

        const chooseRandom = array[(Math.random() * (array.length - 1)).toFixed(0)]
        setHousePicked(chooseRandom)
    }

    function handlePlayAgain(){
        setId(null)
        setPlayerPicked(null)
        setImage(null)
        setPlayerWins(false)
    }

    function chooseWinner() {
        console.log(housePicked.class)

        if (housePicked.class === "rock" && playerPicked === "scissors") {
            // setPlayerWins(false);
            console.log("Perdeu")

        } else if (housePicked.class === "rock" && playerPicked === "paper") {
            // setPlayerWins(true);
            console.log("Ganhou")

        } else if (housePicked.class === "scissors" && playerPicked === "paper") {
            // setPlayerWins(false);
            console.log("Perdeu")

        } else if (housePicked.class === "scissors" && playerPicked === "rock") {
            // setPlayerWins(true);
            console.log("Ganhou")

        } else if (housePicked.class === "paper" && playerPicked === "rock") {
            // setPlayerWins(false);
            console.log("Perdeu")

        } else if (housePicked.class === "paper" && playerPicked === "scissors") {
            // setPlayerWins(true);
            console.log("Ganhou")
        } else {
            console.log("Empate")
        }
    }

    return(
        <div className="container">
            <Header />
            
            <div className={id !== null ? "play width" : "play"}>
                {id !== null ?
                    <div className="result-wrapper">
                        <div className="your-pick">
                            <Button className={"button " + "picked " + playerPicked} key={id}>
                                <div>
                                    <img src={image} alt={image} />
                                </div>
                            </Button>
                        </div>

                        <div className="result">
                            <h3>Você </h3>
                            <button onClick={handlePlayAgain} className="play-again">Play Again</button>
                        </div>

                        <div className="house-pick">
                            {housePicked !== null && (
                                <>
                                    <Button className={"button " + "house-picked " + housePicked.class} key={housePicked.id}>
                                        <div>
                                            <img src={housePicked.img} alt={housePicked.img} />
                                        </div>
                                    </Button>

                                    { chooseWinner() }
                                </>
                            )}
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