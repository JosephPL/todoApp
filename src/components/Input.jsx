const Input = () => {

    const handleAddTask = (target) => {
        const inputValue = target.previousElementSibling.value;
        console.log(inputValue)
    };

    return (
        <>
            <input type='text'/>
            <button type="button" className="btnAdd" onClick={e => handleAddTask(e.target)}>Add</button>
        </>
    
    )
};

export default Input;