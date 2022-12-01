import useAppData from '../../../hooks/useAppData'

import { TaskProps } from '../../../types/task'

import style from './Task.module.scss'

function Task({ completed, id, selected, tarefa, tempo }: TaskProps) {

    const { selectTask } = useAppData()

    return (
        <li
            className={`
                ${style.item} 
                ${selected ? style.itemselected : ''} 
                ${completed ? style.itemcompleted : ''}
            `}
            onClick={() => (!completed && selectTask({
                completed,
                id,
                selected,
                tarefa,
                tempo
            }))}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completed &&
                <span className={style.concluido} aria-label="tarefa completa"></span>}
        </li>
    )
}

export default Task