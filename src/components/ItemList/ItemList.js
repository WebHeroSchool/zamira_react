import React from 'react';
import Item from '../Item/Item'

const ItemList = ( { todoItem} ) => ( <ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Отправить на проверку'} /></li>
    <li><Item todoItem={'Приступить к следующему'} /></li>
  </ul>);

export default ItemList;
