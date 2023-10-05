import { useState } from 'react'
import { nanoid } from "nanoid"
import ListItem from './Components/ListItem'
function App() {
  const [ toDoList, setToDoList ] = useState([
    {id: nanoid(8), content: "Tâche 1"},
    {id: nanoid(8), content: "azeaza"},
    {id: nanoid(8), content: "Tâche 3"}
  ])
  const [ todo, setTodo ] = useState("")
  const [ showValidation, setShowValidation ] = useState(false)

  function deleteTodo(id){
    setToDoList(toDoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault();

    if(todo === ""){
      setShowValidation(true)
      return;
    }
    setToDoList([...toDoList, {id: nanoid(), content:todo}])
    setTodo("")
    setShowValidation(false)
  }

  return (
    <div className='h-screen'>
      <div className="max-4-xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">To Do List</h1>
        <form className="mb-10" onSubmit={handleSubmit}>
          <label htmlFor="todo-item" className="text-slate-50">Ajouter une tâche</label>
          <input type="text" aria-label='Ajouter une tâche' className='mt-1 block w-full rounded'value={todo} onChange={(e) => setTodo(e.target.value) } />
          {
            showValidation && 
            <p className="text-red-400">Ajouter du contenu à votre tâche</p>
          }
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Ajouter</button>
        </form>
        <ul>
          {
            toDoList.length === 0 && <li className="text-slate-200 p-2 mb-2 rounded">Aucune tâche</li>
          }
          {
            toDoList.map(item => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
