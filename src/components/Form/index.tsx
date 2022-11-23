import { FormEvent, useState } from 'react'
import useAppData from '../../hooks/useAppData'

import Button from '../Button'
import style from './Form.module.scss'

function Form() {
    const { setTask } = useAppData()

    const [tarefa, setTarefa] = useState<string>('')
    const [tempo, setTempo] = useState<string>('00:00:00')

    function addNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        // @ts-ignore
        setTask(prev => {
            return [
                ...prev,
                { tempo, tarefa }
            ]
        })

        setTarefa('')
        setTempo('')
    }

    return (
        <form
            className={style.novaTarefa}
            onSubmit={(event) => addNewTask(event)}
        >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    name="task"
                    id="task"
                    type="text"
                    placeholder="O que você quer estudar?"
                    value={tarefa}
                    onChange={(event) => setTarefa(event.target.value)}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    value={tempo}
                    onChange={(event) => setTempo(event.target.value)}
                    required
                />
                <Button type="submit">Adicionar</Button>
            </div>
        </form>
    )
}

export default Form