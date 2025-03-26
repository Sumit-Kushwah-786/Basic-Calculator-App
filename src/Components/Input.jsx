import { useState } from "react";
import "./Input.css";
import Display from "./Display";

export default function Input() {
  const [value, setValue] = useState("");

  let giveInput = (event) => {
    setValue(value + event.target.value);
  };

  let deleteButton = (event) => {
    setValue(value.slice(0, -1));
  };

  let deleteAll = (event) => {
    setValue("");
  };

  let result = (event) => {
    setValue(eval(value));
  };
  return (
    <form>
      <Display value={value} />
      <div>
        <input type="button" value="AC" onClick={deleteAll} />
        <input type="button" value="DE" onClick={deleteButton} />
        <input type="button" value="." onClick={giveInput} />
        <input type="button" value="/" onClick={giveInput} />
      </div>
      <div>
        <input type="button" value="7" onClick={giveInput} />
        <input type="button" value="6" onClick={giveInput} />
        <input type="button" value="9" onClick={giveInput} />
        <input type="button" value="*" onClick={giveInput} />
      </div>
      <div>
        <input type="button" value="4" onClick={giveInput} />
        <input type="button" value="5" onClick={giveInput} />
        <input type="button" value="6" onClick={giveInput} />
        <input type="button" value="+" onClick={giveInput} />
      </div>
      <div>
        <input type="button" value="1" onClick={giveInput} />
        <input type="button" value="2" onClick={giveInput} />
        <input type="button" value="3" onClick={giveInput} />
        <input type="button" value="-" onClick={giveInput} />
      </div>
      <div>
        <input type="button" value="00" onClick={giveInput} />
        <input type="button" value="0" onClick={giveInput} />
        <input type="button" value="=" className="equal" onClick={result} />
      </div>
    </form>
  );
}
