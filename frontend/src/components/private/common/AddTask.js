import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../../State/actions/taskActions';

import '../assets/styles/addtask.css';

class AddTask extends Component {

    constructor(props) {
        super();

        this.onStateChange = this.onStateChange.bind(this);
        this.state = {
            "description": "",
            "deadline": null,
            "isCompleted": false
        }
    }

    onStateChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    addTask = (event) => {
        event.preventDefault();
        const task = {
            "description": this.state.description,
            "deadline": this.state.deadline,
            "isCompleted": this.state.isCompleted
        }
        this.props.addTask(task);
    }

    render() {
        return (
            <div className="add-task">
                <form onSubmit={this.addTask}>
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control"
                            name="description" 
                            placeholder="To Do" 
                            onChange={this.onStateChange}
                            required
                        />
                        <input
                            type="date"
                            className="form-control"
                            name="deadline"
                            onChange={this.onStateChange}
                            placeholder=""
                        />
                        <button 
                            className="btn btn-success" 
                            type="submit" 
                            >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

})

export default connect(
    mapStateToProps,
    { addTask }
)(AddTask);