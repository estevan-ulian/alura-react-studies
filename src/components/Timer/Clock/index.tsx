import style from './Clock.module.scss'

interface ClockProps {
    timeInSeconds: number | undefined
}

function Clock({ timeInSeconds = 0 }: ClockProps) {

    const minutes = Math.floor(Number(timeInSeconds) / 60)
    const seconds = Number(timeInSeconds) % 60

    const [minuteDez, minuteUnit] = String(minutes).padStart(2, '0')
    const [secondDez, secondUnit] = String(seconds).padStart(2, '0')

    return (
        <>
            <span className={style.relogioNumero}>{minuteDez}</span>
            <span className={style.relogioNumero}>{minuteUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondDez}</span>
            <span className={style.relogioNumero}>{secondUnit}</span>
        </>
    )
}

export default Clock