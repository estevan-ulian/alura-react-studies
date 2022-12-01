import { createContext, useState } from "react";
import { TaskProps } from "../types/task";

interface AppContextProps {
    task: TaskProps[],
    setTask: React.Dispatch<React.SetStateAction<[] | TaskProps[]>>,
    selectedTask: TaskProps,
    setSelectedTask: React.Dispatch<React.SetStateAction<TaskProps>>,
    selectTask: (selectedTask: TaskProps) => void,
    finishTask: (selectedTask: TaskProps) => void
}

const INITIAL_SELECTED_TASK: TaskProps = {
    tempo: '00:00:00',
    completed: false,
    id: '',
    selected: false,
    tarefa: ''
}

const AppContext = createContext<AppContextProps>({
    task: [],
    setTask: () => { },
    selectTask: () => { },
    setSelectedTask: () => { },
    selectedTask: INITIAL_SELECTED_TASK,
    finishTask: () => { }
})

export function AppProvider({ children }: any) {
    const [task, setTask] = useState<TaskProps[]>([])
    const [selectedTask, setSelectedTask] = useState<TaskProps>({
        id: '',
        completed: false,
        selected: false,
        tarefa: '',
        tempo: '00:00:00'
    })

    const selectTask = (selectedTask: TaskProps) => {
        setSelectedTask(selectedTask)
        setTask(prev => prev.map(task => ({
            ...task,
            selected: task.id === selectedTask.id ? true : false
        })))
    }

    const finishTask = (selectedTask: TaskProps) => {
        if (selectedTask) {
            setTask(prev => prev.map(item => {
                if (item.id === selectedTask.id) {
                    return {
                        ...item,
                        selecionado: false,
                        completado: true
                    }
                }

                return item
            }))
        }
    }

    const context = {
        task,
        setTask,
        selectedTask,
        setSelectedTask,
        selectTask,
        finishTask
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext