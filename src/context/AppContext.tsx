import { createContext, useState } from "react";
import { TaskProps } from "../types/task";

interface AppContextProps {
    task?: TaskProps[],
    setTask?: React.Dispatch<React.SetStateAction<TaskProps[] | []>>
}

const AppContext = createContext<AppContextProps>({})


export function AppProvider({ children }: any) {
    const [task, setTask] = useState<TaskProps[] | []>([])

    const context = {
        task,
        setTask
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext