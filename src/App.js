import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {
  const initialTodos = [
    { id: 1, title: 'Estudar React', checked: false },
    { id: 2, title: 'Estudar Inglês', checked: true },
    { id: 3, title: 'Tocas Guitarra', checked: false },
    { id: 4, title: 'Aprender Python', checked: false },
  ];

  // cria o estado original dos todos e atribui o valor inicial do initialTodos acima
  const [todos, setTodos] = useState([]);

  // criado para ser usado no index.js dos components
  const onNewTodo = (value) => {
    setTodos([
      ...todos, //concatena com os "todos" anteriores e adiciona o seguinte:
      {
        id: new Date().getTime(), //ID pega o horário atual.
        title: value,
        checked: false,
      },
    ]);
  };

  const onToggle = (todo) => {
    // puxa os objetos do todos, o ID do objeto clicado vai ter seu "checked" mudado para True. "...obj" serve para puxar todas as outras informações do obj Ex: obj.title, obj.id..
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      ) //!todo.checked invertido pelo "!"
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
    //Filtra todos os obj com ID diferentes do que foi clicado. "exclui" o clicado da lista
  };
  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        {/* Componente criado no src\components\NewTodo */}
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
};

export default App;
