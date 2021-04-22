import { Button } from 'react-bootstrap'
import React from 'react'

export const CreateTaskForm = ({handleChange, task, handleCancel, handleSubmit}) => {
    return (
        <div>
             <form>
                <div className="mb-3">
                    <h1>CREATE TASK</h1>
                    <label for="textform" className="form-label">Insert Task</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="task" onChange={handleChange} value={task}/>
                </div>
                <Button type="submit" className="btn btn-dark" onClick={handleSubmit}>Submit</Button>
                <Button type="submit" className="btn btn-success" onClick={handleCancel}>cancel</Button>
            </form>
        </div>
    )
}
