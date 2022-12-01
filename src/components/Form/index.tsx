import { FormEvent, useState } from 'react'
import useAppData from '../../hooks/useAppData'

import Button from '../Button'
import style from './Form.module.scss'

import { v4 as uuidv4 } from 'uuid'

function Form() {
    const { setTask } = useAppData()

    const [tarefa, setTarefa] = useState<string>('')
    const [tempo, setTempo] = useState<string>('00:00:00')

    function addNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setTask(prev => [
            ...prev,
            {
                tempo,
                tarefa,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])

        setTarefa('')
        setTempo('00:00:00')
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
                    name="taskTimeTime"
                    id="taskTimeTime"
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
                    max="06:00:00"
                    value={tempo}
                    onChange={(event) => setTempo(event.target.value)}
                    required
                />
            </div>
            <Button type="submit">Adicionar</Button>
        </form>
    )
}

export default Form