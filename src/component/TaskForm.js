import React from 'react';

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            status: true
        }
        this.cancelForm = this.cancelForm.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    cancelForm() {
        this.props.closeForm(false);
    }

    onHandleChange(e) {
        let name = e.target.name
        let value = e.target.value
        if (name === 'status') {
            value = e.target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        })
    }

    onHandleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }


    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text" className="form-control" name="name" value={this.state.name}
                                onChange={this.onHandleChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required" name="status"
                                onChange={this.onHandleChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>
                            &nbsp;
                            <button type="button" onClick={this.cancelForm} className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }

}

export default TaskForm;
