import useAppData from '../../hooks/useAppData'
import Task from './Task'
import style from './Tasks.module.scss'

function Tasks() {

    const { task } = useAppData()

    return (
        <aside className={style.AppStyle}>
            <h2>Estudos do dia</h2>
            <ul>
                {/*  @ts-ignore */}
                {task.map((item, index) => {
                    return (
                        <Task
                            key={index}
                            task={item.tarefa}
                            time={item.tempo}
                        />
                    )
                })}
            </ul>
        </aside>
    )
}

export default Tasks