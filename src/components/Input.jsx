import { useContext } from "react";
import { useState } from "react";
import { useRef } from "react";
import { todoContext } from "../context/TodoProvider";

const Input = () => {
    const { addTask } = useContext(todoContext);
    const [ desc, setDesc ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(desc)
        setDesc('');
    };

    return (
        <form onSubmit={handleSubmit}>  
            <input type='text' onChange={(e) => {setDesc(e.target.value)}} value={desc} autoComplete="off" required/>
            <button type="submit" className="btnAdd">Add</button>
        </form>
    )
};

export default Input;