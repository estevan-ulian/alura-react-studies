import Botao from '../Button'
import Clock from './Clock'

import style from './Timer.module.scss'

function Timer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}

export default Timer