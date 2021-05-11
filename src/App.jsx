import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './index.css';
import Lists from './List';

const App = ()=> {

    const [item, setItem] =useState("");
    const [newItem,setNewItem] = useState([]);

    const itemEvent = (event) =>{
        setItem(event.target.value);
    };

    const clickEvent = () =>{
        setNewItem((oldItem) => {
            return [...oldItem,item];
        });
        setItem("");
    };
    return(
        <>
            <div className="mainDiv">
                <div className="innerDiv">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text"
                        placeholder="Add an Items"
                        value={item}
                        onChange={itemEvent}
                    />
                    <Button className="newbtn" onClick={clickEvent}> <AddIcon /> </Button>
                    <br/>
                    <ol>
                    <br/>
                        {newItem.map((val,index) => {
                           return <Lists key={index} text={val}/>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default App;