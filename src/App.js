import { useState } from "react";
import "./App.css";
import List from "./components/List";
function App() {
  //define state hooks
  const [currentItem, setCurrentItem] = useState(null);
  //to store the to-do list of items.
  const [itemList, setItemList] = useState([]);

  const onChangeHandler = (e) => {
    //console.log(e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    setItemList([...itemList, { item: currentItem, key: Date.now }]); //gives individual item  along with the new item.
    //console.log(itemList);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input
              value={currentItem}
              onChange={onChangeHandler}
              placeholder="Add Tasks"
            />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={setItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
