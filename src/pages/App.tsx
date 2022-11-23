import Form from "../components/Form"
import Tasks from "../components/Tasks"
import Timer from "../components/Timer"

import style from './App.module.scss'

function App() {

  return (
    <div className={style.AppStyle}>
      <Form />
      <Tasks />
      <Timer />
    </div>
  );
}

export default App;
