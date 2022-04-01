import React from "react";
import "./List.css";
const List = (props) => {
  const deleteItems = (key) => {
    //using filter() from ES6 filter out based on the key
    const newList = props.itemList.filter((todoItem) => {
      return todoItem.key !== key;
    });
    props.updateItemList(newList);
  };
  //console.log(props);
  return (
    <div>
      {props.itemList.map((todoItem) => {
        console.log(todoItem);
        return (
          <div key={todoItem.key} className="item">
            <p>{todoItem.item}</p>
            <button onClick={() => deleteItems(todoItem.key)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
