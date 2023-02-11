import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Input from "./components/input";

function App() {
  const [data, setData] = useState([]);

  const removeElement = (index) => {
    const newData = data.filter((item, i) => i != index);
    setData(newData);
  };

  return (
    <div>
      {data.map((item, index) => (
        <ul>
          <li onClick={() => removeElement(index)}>{item.id}</li>
        </ul>
      ))}

      <Input />
    </div>
  );
}

export default App;
