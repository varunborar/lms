import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTask } from '../../../State/actions/taskActions';

import '../assets/styles/taskcard.css'
class Taskcard extends Component {

    constructor(props) {
        super();
        this.state = {
            "_id": props._id,
            "description": props.description,
            "isCompleted": props.isCompleted,
            "deadline": props.deadline
        }
    }

    handleChange = async (event) => {
        this.setState({
            "isCompleted": event.currentTarget.checked
        })
        const updateRequest = {
            '_id': this.props._id,
            'description': this.props.description,
            'isCompleted': event.currentTarget.checked,
            'deadline': this.props.deadline
        };
        this.props.updateTask(updateRequest);
    }

    render() {
        return (
            <div className="task-card d-flex row">
                <div className="task">
                    <span>{this.props.description}</span>
                    <div>
                        <span>{this.props.deadline}</span>
                        <input
                            type="checkbox"
                            defaultChecked={this.props.isCompleted}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

Taskcard.propTypes = {
    updateTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

})

export default connect(
    mapStateToProps,
    { updateTask }
)(Taskcard);