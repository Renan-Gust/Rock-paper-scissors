import { Button } from '../components/Button'

import closeImg from '../images/close.svg'
import rulesImg from '../images/rules.svg'

import '../styles/rules.css'

export const Rules = () => {
    function handleCloseModal() {
        console.log("KK")
    }

    return(
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-header">
                    <h1>Rules</h1>
                    <Button className="close-modal" onClick={handleCloseModal}>
                        <img src={closeImg} alt={closeImg} />
                    </Button>
                </div>

                <img src={rulesImg} alt={rulesImg} />
            </div>
        </div>
    )
}