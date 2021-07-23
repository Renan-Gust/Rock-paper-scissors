import { useState } from 'react';

import { Button } from '../components/Button'
import { Rules } from '../components/Rules'

import '../styles/footer.css'

export const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    // function handleOpenMOdal() {
    //     // setModalIsOpen(true)

    //     // if(modalIsOpen) setModalIsOpen(false)

    //     !modalIsOpen ? setModalIsOpen(true) : setModalIsOpen(false)
    // }

    return(
        <footer>
            <Button className="rules" onClick={() => setModalIsOpen(true)}>Rules</Button>

            { modalIsOpen ? 
                <Rules />
            : ""}
        </footer>
    )
}