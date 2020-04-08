import React from 'react';
import TaskItem from "./TaskItem";

var randomstring = require("randomstring");

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.generateData = this.generateData.bind(this);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
        this.onHandleChange = this.onHandleChange.bind(this)
    }

    generateData() {
        var tasks = [
            {
                id: 1,
                name: randomstring.generate(7),
                status: true
            },
            {
                id: 2,
                name: randomstring.generate(7),
                status: false
            },
            {
                id: 3,
                name: randomstring.generate(7),
                status: false
            }
        ];
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    onHandleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );
        this.setState({
            [name]: value
        })
    }

    render() {
        var {tasks} = this.props;
        var {filterName, filterStatus} = this.state;
        var element = tasks.map((task, index) => {
            return (<TaskItem
                    key={index}
                    item={task}
                    onUpdateStatus={this.props.onUpdateStatus}
                    onDeleteItem={this.props.onDeleteItem}
                    onUpdateItem={this.props.onUpdateItem}
                />
            )
        })
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button className="btn btn-danger" onClick={this.generateData}>Tạo 3 data mẫu</button>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name="filterName" value={filterName}
                                   onChange={this.onHandleChange}/>
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" onChange={this.onHandleChange}
                                    value={filterStatus}>
                                <option value="-1">Tất Cả</option>
                                <option value="0">Ẩn</option>
                                <option value="1">Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {element}
                    </tbody>
                </table>
            </div>


        )
    }

}

export default TaskList;
