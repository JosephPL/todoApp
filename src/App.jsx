import './App.css'
import Input from './components/Input'
import Task from './components/Task'

function App() {

  return (
    <div className="App">
      <header>
        <h1>#todo</h1>
      </header>
      <main>
        <nav>
          <a href="#">asd</a>
          <a href="#">asd</a>
          <a href="#">asd</a>
        </nav>
        <div className='container'>
          <Input />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </main>
    </div>
  )
}

export default App
