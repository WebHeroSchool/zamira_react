import React from 'react';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const todoItem = 'Выполнить задание';
const App = () => {
  const items = [
    {
      value: 'Выполнить задание',
      isDone: true
    },
    {
    value : 'Отправить на проверку',
    isDone: true
    },
    {
    value: 'Приступить к следующему',
    isDone: false
    }
  ];

  return (
  <div className={styles.wrap}>
    <h1 className={styles.title}>Важные дела:</h1>
    <InputItem />
    <ItemList items={items}/>
    <Footer count={4} />

    <Button variant="contained" color="primary">
      Ура
    </Button>
  </div>);
}

export default App;
