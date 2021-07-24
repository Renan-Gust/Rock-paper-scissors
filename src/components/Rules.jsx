import closeImg from '../images/close.svg'
import rulesImg from '../images/rules.svg'

import '../styles/rules.css'

export const Rules = ({ setModalIsOpen }) => {
    return(
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-header">
                    <h1>Rules</h1>
                    <button 
                        className="close-modal" 
                        onClick={() => setModalIsOpen(false)}>
                        <img src={closeImg} alt={closeImg} />
                    </button>
                </div>

                <img src={rulesImg} alt={rulesImg} />
            </div>
        </div>
    )
}