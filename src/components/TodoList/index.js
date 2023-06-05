import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

import './styles.css';

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.map(
        (
          todo //map = função de looping que acessa todos os todos que foram setados no useState (initialTodos)
        ) => (
          <li key={todo.id.toString()}>
            <span
              //if ternário dentro da classeName, se tiver checked vai adicionar a classe com o espaço definido no "join"
              className={['todo', todo.checked ? 'checked' : ''].join(' ')}
              onClick={() => onToggle && onToggle(todo)}
              onKeyPress={() => onToggle && onToggle(todo)}
              role="button"
              tabIndex={0}
            >
              {todo.title}
            </span>
            <button
              className="remove"
              type="button"
              onClick={() => onRemove && onRemove(todo)}
            >
              <MdDelete size={28} />
            </button>
          </li> //o resultado da função "map" é um novo array de elementos "li", um para cada objeto "todo" no array "todos", onde cada elemento "li" contém um elemento "span" com o título do todo (title dos initialTodos) e um botão com o ícone de remoção.
        )
      )}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default TodoList;
