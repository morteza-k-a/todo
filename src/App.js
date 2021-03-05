import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useState,useEffect } from "react";
import { TextField, Button,Paper,Typography } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

export default function App() {
  const [list, setlist] = useState([]);
  const [text, settext] = useState("");
  const [edittext, setedittext] = useState("");
  const [editindex,setindex] = useState(null);
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
  const edititem=(key,text)=>{
   const listdup = list;
     for (let i in listdup){
        if(listdup[i].key === key )
           listdup[i].text = text
     }
    setlist(listdup)
}
    useEffect(()=>{
      if(localStorage.todo)
        setlist(JSON.parse(localStorage.todo))
    },[])
    useEffect(()=>{
      if(localStorage)
        localStorage.setItem("todo",JSON.stringify(list));
    },[list])
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
      {
        list.length !== 0?
      list.map((item,index)=>{return(
            <Paper className="todo">
            <div className="info">
              {!(editindex === index)?<Typography>{item.text}</Typography>:<TextField value={edittext?edittext:item.text} onChange={e=>setedittext(e.target.value)} style={{width:"95%"}}/>}
            </div>
            <div className="control">
             {editindex === index?<DoneOutlinedIcon onClick={()=>{setindex(null);setedittext("");edititem(item.key,edittext)}} style={{cursor:"pointer"}}/>:<EditOutlinedIcon onClick={()=>{setindex(index)}} style={{cursor:"pointer"}}/>}
              <DeleteOutlineIcon
style={{cursor:"pointer"}}
                onClick={() => {
                  delitem(item.key);
                }}
              />
            </div>
          </Paper>)
    }):<Alert style={{margin:".5rem"}} severity="info">your tasks will be shown here!</Alert>

    }
    </div>
  );
}
