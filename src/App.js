import React from 'react';
import './App.css';
import TaskForm from "./component/TaskForm";
import TaskControl from "./component/TaskControl";
import TaskList from "./component/TaskList";

var randomstring = require("randomstring");

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false
        }
        this.onToggleForm = this.onToggleForm.bind(this)
        this.onCloseForm = this.onCloseForm.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks'))
        })
    }

    onToggleForm() {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });

    }

    onCloseForm(data) {
        this.setState({
            isDisplayForm: data
        });
    }

    onSubmit(data) {
        data.id = randomstring.generate(5)
        let {tasks} = this.state;
        tasks.push(data)
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    onStatusUpdate = (id) => {
        let {tasks} = this.state;
        let updateTask = tasks.map((item, index) => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        this.setState({
            tasks: updateTask
        })
        localStorage.setItem('tasks', JSON.stringify(updateTask))

    }


    onDeleteItem = (id) => {
        let {tasks} = this.state;
        let updateTask = tasks.filter(item => item.id !== id);
        this.setState({
            tasks: updateTask
        })
        localStorage.setItem('tasks', JSON.stringify(updateTask))
    }

    onUpdateItem = (id) => {

    }

    render() {
        var {tasks, isDisplayForm} = this.state;
        var eleTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} closeForm={this.onCloseForm}/> : ''
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
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        {/*Controler*/}
                        <TaskControl/>
                        {/*Controler*/}
                        <div className="row mt-15">
                            {/*List*/}
                            <TaskList
                                tasks={tasks}
                                onUpdateStatus={this.onStatusUpdate}
                                onDeleteItem={this.onDeleteItem}
                                onUpdateItem={this.onUpdateItem}
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
