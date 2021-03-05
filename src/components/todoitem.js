import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import {Component} from "react";
import {Paper,Typography,TextField} from "@material-ui/core"

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {text:props.item.text,editing:false};
    }
    changetext = (e)=>{
        this.setState(st => ({text:e.target.value ,editing:st.editing}))
    }
    changeedit=()=>{
        this.props.editfunction(this.props.item.key,this.state.text);
        this.setState(st => ({text:this.state.text ,editing:!st.editing}))
    }
    render(){
        return(
            <Paper className="todo">
            <div className="info">
              {!this.state.editing?<Typography>{this.state.text}</Typography>:<TextField value={this.state.text} onChange={this.changetext} style={{width:"95%"}}/>}
            </div>
            <div className="control">
             {this.state.editing?<DoneOutlinedIcon onClick={this.changeedit} style={{cursor:"pointer"}}/>:<EditOutlinedIcon onClick={this.changeedit} style={{cursor:"pointer"}}/>}
              <DeleteOutlineIcon
style={{cursor:"pointer"}}
                onClick={() => {
                  this.props.deletefunction(this.props.item.key);
                }}
              />
            </div>
          </Paper>
        )
    }
}
export default Todo;