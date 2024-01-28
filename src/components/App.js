import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  let [value, setValue] = useState("");
  let [items, setItems] = useState(fruits);

  useEffect(() => {
    let filterdata = items.filter((item) => {
      return item.includes(value);
    });
    value ? setItems(filterdata) : setItems(fruits);
  }, [value]);

  return (
    <div>
      <div>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {items &&
            items.map((item, index) => {
              return <li key={item + index}>{item}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
