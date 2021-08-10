import React from 'react';

import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';


const todoItem = 'Выполнить задание';
const App = () => (
  <div>
    <h1>Важные дела:</h1>
    <ItemList todoItem={todoItem}/>
    <Footer count={4} />  </div>);

export default App;
