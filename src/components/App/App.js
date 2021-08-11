import React from 'react';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Выполнить задание';
const App = () => {
  const items = [
    {
      value: 'Выполнить задание'
    },
    {
    value : 'Отправить на проверку'
    },
    {
    value: 'Приступить к следующему'
    }
  ];


  return (
  <div className="wrap">
    <h1 className="wrap_title">Важные дела:</h1>
    <InputItem />
    <ItemList items={items}/>
    <Footer count={4} />  </div>);
  }

export default App;
