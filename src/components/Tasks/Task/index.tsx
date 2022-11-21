import style from '../Tasks.module.scss'

interface TaskProps {
    task: string,
    time: string
}

function Task({ task, time }: TaskProps) {
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Task