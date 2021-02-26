import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Todo from "./components/todoitem";

export default function App() {
  const [list, setlist] = useState([{ key: uuidv4(), text: "item 1" }]);
  const [text, settext] = useState("");
  const genuuid = () => {
    while (true) {
     var uuid_ = uuidv4();
     var formattedls = list.filter((item) => item.key === uuid_);
      if (formattedls.length === 0) return uuid_;
    }
  };
  const delitem = (key) => {
    setlist((ls) => ls.filter((item) => item.key !== key));
  };
  const additem = () => {
    setlist((ls) => ls.concat({ key: genuuid(), text: text }));
    settext("");
  };
  return (
    <div className="App">
      <div className="addtodo">

          <TextField
            style={{ width: "75%",marginRight:"5%" }}
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder={"task to do"}
          />

        <Button
          variant={"contained"}
          style={{ width: "20%" }}
          color={"primary"}
          onClick={additem}
        >

          add
        </Button>
      </div>
      {list.map((item) => {
        return (
          <Todo deletefunction={delitem} item={item}/>
        );
      })}
    </div>
  );
}
