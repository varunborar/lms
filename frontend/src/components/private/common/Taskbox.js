import React, {Component} from 'react';
import Taskcard from './Taskcard';

class Taskbox extends Component{

    constructor(props){
        super();
    }

    render(){
        return( 
            <div className="taskbox">
                {this.props.tasks.map(task => {
                    return (
                        <Taskcard
                            description={task.description}
                            isCompleted={task.isCompleted}
                            deadline={task.deadLine ? task.deadLine.split('T')[0]: null}
                            _id={task._id}
                            key={task._id}
                        />
                    )
                })}
            </div>
        )
    } 
}


export default Taskbox;