import '../styles/header.css'

export const Header = () => {
    return(
        <header>
            <div className="content">
                <div className="title">
                    <h1>Rock</h1>
                    <h1>Paper</h1>
                    <h1>Scissors</h1>
                </div>

                <div className="score-box">
                    <div className="score-box-title">Score</div>
                    <div className="score-box-score">0</div>
                </div>
            </div>
        </header>
    )
}