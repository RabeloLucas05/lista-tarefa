import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const NewTodo = ({ onNewTodo }) => {
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;
  // usado para gerenciar o estado do componente.
  // value iniciado como string vazia
  const [value, setValue] = useState('');
  //é responsável por definir o valor do estado value como uma string vazia.
  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value); // função no App.js
      erase();
    }
  };

  // é chamada sempre que o usuário digita algo na entrada de texto. Ele atualiza o valor do estado value para refletir a entrada do usuário.
  const onChange = (event) => {
    setValue(event.target.value); //o evento é chamado por qualquer mudança no input
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="o que precisa ser feito?"
      //Essas propriedades fazem parte do modelo de programação do React para criar interfaces de usuário interativas e responsivas.
      value={value}
      onChange={onChange} // evento que é disparado sempre que o valor de um elemento de formulário é alterado
      onKeyDown={onKeyDown} //Sempre que aperta uma tecla
    />
  );
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
