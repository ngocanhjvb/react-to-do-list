import React from 'react';

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            name: '',
            status: true,
        }
        this.cancelForm = this.cancelForm.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    componentWillMount() {
        if (this.props.itemEditing && this.props.itemEditing.id !== null) {
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status
            });
        } else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.itemEditing && nextProps.itemEditing.id !== null) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            });
        } else {
            this.onClear();
        }
    }

    onClear() {
        this.setState({
            id: null,
            name: '',
            status: true
        })
    }

    cancelForm() {
        this.props.closeForm();
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
        this.props.onSubmit(this.state);
    }


    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.itemEditing !== null ? 'Cập nhật công viec' : 'Thêm Công Việc'}</h3>
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
                                value={this.state.status}
                                onChange={this.onHandleChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">{this.props.itemEditing !== null ? 'Cập nhật' : 'Thêm'}</button>
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
