import React from 'react';
import TaskSearchControl from "./TaskSearchControl";
import TaskSortControl from "./TaskSortControl";

class TaskControl extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    {/*Search*/}
                    <TaskSearchControl
                        onSearch={this.props.onSearch}
                    />
                    {/*Search*/}
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    {/*Sort*/}
                    <TaskSortControl
                        onSort={this.props.onSort}
                        sortBy={this.props.sortBy}
                        sortValue={this.props.sortValue}
                    />
                    {/*Sort*/}
                </div>
            </div>

        )
    }

}

export default TaskControl;
