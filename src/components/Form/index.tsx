import Button from '../Button'
import style from './Form.module.scss'

function Form() {
    return (
        <form>
            <div className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        name="task"
                        id="task"
                        type="text"
                        placeholder="O que você quer estudar?"
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
                        required
                    />
                </div>
                <Button>Adicionar</Button>
            </div>
        </form>
    )
}

export default Form