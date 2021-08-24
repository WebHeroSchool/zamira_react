import React from 'react';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

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
  <div className={styles.wrap}>
    <h1 className={styles.title}>Важные дела:</h1>
    <InputItem />
    <ItemList items={items}/>
    <Footer count={4} />
  </div>);
}

export default App;
