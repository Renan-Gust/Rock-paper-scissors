import '../styles/button.css'

export const Button = ({ children, className, onClick }) => {
    return(
        <a href="#/" className={className} onClick={onClick}>
            {children}
        </a>
    )
}