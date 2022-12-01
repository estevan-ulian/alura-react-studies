import useAppData from '../../hooks/useAppData'
import Task from './Task'
import style from './Tasks.module.scss'

function Tasks() {

    const { task } = useAppData()

    return (
        <aside className={style.AppStyle}>
            <h2>Estudos do dia</h2>
            <ul>

                {task.map((item) => {
                    return (
                        <Task
                            key={item.id}
                            tarefa={item.tarefa}
                            tempo={item.tempo}
                            selected={item.selected}
                            completed={item.completed}
                            id={item.id}
                        />
                    )
                })}
            </ul>
        </aside>
    )
}

export default Tasks