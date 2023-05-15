import { useState } from "react"


export default function TodoList(){
  const[todos,setTodos] = useState([])
  const[inputValue,setInputValue] = useState('')

  function handleChange(e){
    setInputValue(e.target.value)
  }

  function handleClick(){
    if(inputValue.trim()!== ''){
      setTodos([...todos,inputValue])
      setInputValue('')
    }
  }

  function handleDelete(index){
    const newtodos = todos.filter((_,i)=> i !==index)
    setTodos(newtodos)
  }

  return(
    <>
    <main>
      <div>
      <input type="text"
      placeholder="input todos"
      onChange={handleChange}
       value={inputValue} 
      />
      <button onClick={handleClick}>add</button></div>
      <ol>
        {todos.map((todo,index)=>(
          <li key={index}>{todo} <button onClick={()=>handleDelete(index)}>delete</button></li>
        ))}
      </ol>
    </main>
    </>

  )
}