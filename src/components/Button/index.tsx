
import style from './Botao.module.scss'

interface BotaoProps {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
}

function Botao({ children, type = 'button' }: BotaoProps) {
    return (
        <button className={style.botao} type={type}>
            {children}
        </button>
    )
}

export default Botao