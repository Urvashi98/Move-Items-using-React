import "./App.css";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import { useState } from "react";

let arrayA = [
  { id: "a1", value: "A1" },
  { id: "a2", value: "A2" },
  { id: "a3", value: "A3" },
  { id: "a4", value: "A4" },
];

let arrayB = [
  { id: "b1", value: "B1" },
  { id: "b2", value: "B2" },
  { id: "b3", value: "B3" },
  { id: "b4", value: "B4" },
];

function App() {
  const [arrA, setArrA] = useState(arrayA);
  const [arrB, setArrB] = useState(arrayB);
  const [obj, setObj] = useState({});
  const [isCurrent, setIsCurrent] = useState(false);

  const onClickItemA = (item) => {
    console.log(item);
    setIsCurrent(true);
    setObj(item);
  };
  const onClickMoveToB = () => {
    if (JSON.stringify(obj) !== "{}") {
      let filteredA = arrA.filter((i) => {
        return i.id !== obj.id;
      });
      setArrA(filteredA);
      //check if this object already exists in the array
      if (!arrB.includes(obj)) {
        setArrB((prevState) => [...prevState, obj]);
      } else {
        alert("Please move it to Section A");
      }
    } else {
      alert("please select an item");
    }
  };
  const onClickMoveToA = () => {
    if (JSON.stringify(obj) !== "{}") {
      let filteredB = arrB.filter((i) => {
        return i.id !== obj.id;
      });
      setArrB(filteredB);
      //check if this object already exists in the array
      if (!arrA.includes(obj)) {
        setArrA((prevState) => [...prevState, obj]);
      } else {
        alert("Please move it to Section B");
      }
    } else {
      alert("please select an item");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <SectionA array={arrA} onClick={(item) => onClickItemA(item)} isCurrent = {isCurrent}/>
        <div className="btn_container">
          <span className="btn_span" onClick={() => onClickMoveToB()}>
            Move to B
          </span>
          <span className="btn_span" onClick={() => onClickMoveToA()}>
            Move to A
          </span>
        </div>
        <SectionB array={arrB} onClick={(item) => onClickItemA(item)} isCurrent = {isCurrent}/>
      </header>
    </div>
  );
}

export default App;
