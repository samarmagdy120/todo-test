import React, { Component, Fragment } from 'react';

class ShowItem extends Component {
    state = {
        isEdit:false
    }

    toggleCourse = () => {
        let {isEdit} = this.state;
        return(
            this.setState({
                isEdit: !isEdit
            })
        )
    }

    renderCourse = () =>{
        return (
                <li className="item-list">
                    <span className="item-name">
                    {this.props.course.name}
                    </span>
                    <button onClick={() => {this.toggleCourse()}} className="btn btn-success">Complete</button>
                    <button onClick={() => {this.props.deleteCourse()}} className="btn btn-danger">Delete</button>

                </li>
        )
    }

    editForm = () => {
        return(
            <form onSubmit={this.updateCourseItem} className="item-list">
            <input type="text" defaultValue={this.props.course.name} ref={(v) =>{this.input = v}}/>
            <button>Update</button>
            </form>
        )
    }

    updateCourseItem = (e) =>{
        e.preventDefault();
        this.props.editCourse(this.props.index,this.input.value);
        this.toggleCourse();
    
      }
   

    render() {
        let {isEdit} = this.state;

        return (
            <Fragment>
                {isEdit ? this.editForm() : this.renderCourse()}
            </Fragment>
        )
    }

}
export default ShowItem;