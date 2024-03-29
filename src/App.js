import React from 'react';
import './App.css';
import TaskForm from "./component/TaskForm";
import TaskControl from "./component/TaskControl";
import TaskList from "./component/TaskList";
import _ from 'lodash';


var randomstring = require("randomstring");

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            itemEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: ''
        }
        this.onShowForm = this.onShowForm.bind(this)
        this.onCloseForm = this.onCloseForm.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onFilter = this.onFilter.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

    componentDidMount() {
        this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks'))
        })
    }

    onShowForm() {
        this.setState({
            isDisplayForm: true,
            itemEditing: null
        });

    }

    onCloseForm() {
        this.setState({
            isDisplayForm: false,
            itemEditing: null
        });
    }

    onSubmit(data) {
        let {tasks} = this.state;
        if (data.id === null) {
            data.id = randomstring.generate(5)
            tasks.push(data)
        } else {
            tasks = tasks.map((item, index) => {
                if (item.id === data.id) {
                    item = data
                }
                return item
            })
        }
        this.setState({
            tasks: tasks,
            itemEditing: null
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
        this.onCloseForm();
    }

    onStatusUpdate = (id) => {

        let {tasks} = this.state;
        var index = _.findIndex(tasks, function(o) { return o.id == id; });
        tasks[index].status = !tasks[index].status;
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))

    }

    onDeleteItem = (id) => {
        let {tasks} = this.state;
        let updateTask = tasks.filter(item => item.id !== id);
        this.setState({
            tasks: updateTask
        })
        localStorage.setItem('tasks', JSON.stringify(updateTask))
    }

    onUpdateItem = (task) => {
        this.setState({
            itemEditing: task,
            isDisplayForm: true
        })
    }

    onFilter(filterName, filterStatus) {
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }

    onSearch(keyword) {
        this.setState({
            keyword: keyword.toLowerCase()
        })
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }

    render() {
        var {tasks, isDisplayForm, itemEditing, filter, keyword, sortBy, sortValue} = this.state;
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().search(filter.name) !== -1
                })
            }
            if (filter.status) {
                tasks = tasks.filter((task) => {
                    if (filter.status == -1) {
                        return task
                    } else {
                        return task.status == (filter.status == 1)
                    }
                })
            }
        }
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().search(keyword) !== -1
            })
        }

        if(sortBy === 'name'){
            tasks.sort((a, b) => {
                if(a.name > b.name) return sortValue;
                else if(a.name < b.name) return -sortValue;
                else return 0;
            });
        }else{
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sortValue;
                else if(a.status < b.status) return sortValue;
                else return 0;
            });
        }


        var eleTaskForm = isDisplayForm ? <TaskForm
            onSubmit={this.onSubmit}
            closeForm={this.onCloseForm}
            itemEditing={itemEditing}
        /> : ''
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/*form*/}
                        {eleTaskForm}
                        {/*form*/}
                    </div>
                    <div
                        className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onShowForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        {/*Controler*/}
                        <TaskControl
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        />
                        {/*Controler*/}
                        <div className="row mt-15">
                            {/*List*/}
                            <TaskList
                                tasks={tasks}
                                onUpdateStatus={this.onStatusUpdate}
                                onDeleteItem={this.onDeleteItem}
                                onUpdateItem={this.onUpdateItem}
                                onFilter={this.onFilter}
                            />
                            {/*List*/}
                        </div>

                    </div>
                </div>
            </div>
        );
    }


}

export default App;
