import { useEffect, useState } from 'react'

import useAppData from '../../hooks/useAppData'
import { timeToSeconds } from '../../common/utils/time'

import Botao from '../Button'
import Clock from './Clock'

import style from './Timer.module.scss'

function Timer() {

    const { selectedTask, finishTask } = useAppData()

    const [time, setTime] = useState<number>()

    function countdownTime(count: number = 0) {
        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1)
                return countdownTime(count - 1)
            } else {
                finishTask(selectedTask)
            }
        }, 1000)
    }

    useEffect(() => {
        if (selectedTask?.tempo) {
            setTime(timeToSeconds(selectedTask.tempo))
        }

    }, [selectedTask])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock timeInSeconds={time} />
            </div>
            <Botao onClick={() => countdownTime(time)}>
                Começar
            </Botao>
        </div>
    )
}

export default Timer