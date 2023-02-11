import React, { useState } from "react";
import "./table.css";
function Input() {
  const [Info, setInfo] = useState("");
  const [items, setItems] = useState([]);

  const getData = (e) => {
    e.preventDefault();

    if (!Info) {
      alert("ad yazin");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      name: Info,
    };

    setItems((oldlist) => [...oldlist, item]);
    setInfo("");
  };
  const deleteItem = (id) => {
    const newArr = items.filter((item) => item.id !== id);

    setItems(newArr);
  };
  return (
    <div className="centered">
      <h1>TO DO LIST</h1>
      <div className="input-div">
        <label>
          <span className="span">Ad və Soyad</span>
          <br />
          <input
            onChange={(e) => setInfo(e.target.value)}
            value={Info}
            name="name"
            type="text"
            placeholder="adınızı daxil edin"
          />
        </label>

        <button onClick={getData} className="btn">
          Əlavə edin
        </button>
      </div>
      <div className="list-div">
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.name}{" "}
                <button className="del-btn" onClick={() => deleteItem(item.id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Input;
