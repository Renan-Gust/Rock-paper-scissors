import { useState } from 'react';

import { Rules } from '../components/Rules'

import '../styles/footer.css'

export const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <footer>
            <button className="rules" onClick={() => setModalIsOpen(true)}>Rules</button>

            { modalIsOpen ? 
                <Rules setModalIsOpen={setModalIsOpen} />
            : ""}
        </footer>
    )
}