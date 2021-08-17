

const AddTask = ({onAdd}) => {


    const submitTask = (event) => {
        event.preventDefault();
        let text = event.target.taskInput.value
        let day = event.target.dayInput.value
        let reminder = event.target.checkboxInput.checked
        
        if (!text){
            alert('Please add a task')
            return
        }
        onAdd({text,day,reminder})

        event.target.taskInput.value = ''
        event.target.dayInput.value = ''
        event.target.checkboxInput.checked = false
    }

    return (
        <form className='add-form' onSubmit={submitTask}>
           <div className='form-control'>
                <label>Task</label>
                <input type='text' name='taskInput' placeholder='Add Task' />  
            </div> 
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' name='dayInput' placeholder='Add Day & Time' />  
            </div> 
            <div className='form-control form-control-check'>
                <label>Set reminder</label>
                <input type='checkbox' name='checkboxInput'/>  
            </div> 
            <input className='btn btn-block' type='submit' value='Save Task'/>  
            
        </form>
    )
}

export default AddTask
