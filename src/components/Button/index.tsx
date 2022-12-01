
import style from './Botao.module.scss'

interface BotaoProps {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Botao({ children, onClick, type = 'button' }: BotaoProps) {
    return (
        <button className={style.botao} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao