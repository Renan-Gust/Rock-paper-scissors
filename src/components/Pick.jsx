import '../styles/pick.css'

export const Pick = ({ children, className, onClick }) => {
    return(
        <a className={className} onClick={onClick}>
            {children}
        </a>
    )
}