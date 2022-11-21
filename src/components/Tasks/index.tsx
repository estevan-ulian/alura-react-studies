import Task from './Task'
import style from './Tasks.module.scss'

function Tasks() {
    const allTasks = [
        {
            task: 'react',
            time: '02:00:00'
        },
        {
            task: 'javascript',
            time: '01:00:00'
        },
        {
            task: 'typescript',
            time: '03:00:00'
        }
    ]

    return (
        <aside className={style.AppStyle}>
            <h2>Estudos do dia</h2>
            <ul>
                {allTasks.map((item, index) => {
                    return (
                        <Task
                            key={index}
                            task={item.task}
                            time={item.time}
                        />
                    )
                })}
            </ul>
        </aside>
    )
}

export default Tasks