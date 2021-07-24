import '../styles/button.css'

export const Button = ({ children, className, onClick }) => {
    return(
        <a className={className} onClick={onClick}>
            {children}
        </a>
    )
}