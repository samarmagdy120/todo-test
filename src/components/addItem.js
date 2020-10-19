import React from 'react'

const AddItem = (props) => {
    return (
        <form onSubmit={props.addCourse}>
        <input className="input-name" type="text" onChange={props.handleChange} value={props.current} placeholder="What do you have to do"/>
    </form>
    )
}

export default AddItem
