import { useState } from "react";

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const todoText = newTodo.trim();
    if (todoText === '') {
      return;
    }

    const todoBaru = {
      id: Date.now(),
      text: todoText,
    };

    setTodos((prevTodos) => [...prevTodos, todoBaru]);

    setNewTodo('')

  }
  return (
    <>
      <div>
        <h1>Masukan Todo</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newTodo} onChange={handleInputChange} />
          <button type="submit" >
            Tambahkan
          </button>
        </form>

        <hr />

        <h2>Daftar Todo</h2>
        {
          todos.length === 0 ? (
            <p>Belum ada todo</p>
          ) : (
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  {todo.text}
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </>
  )
}

export default App;