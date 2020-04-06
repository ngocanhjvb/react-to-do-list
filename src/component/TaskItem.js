import React from 'react';

class TaskItem extends React.Component {

    onChangeStatus = () => {
        this.props.onUpdateStatus(this.props.item.id)
    }

    onDelete = () => {
        this.props.onDeleteItem(this.props.item.id)
    }

    onUpdate = () => {
        this.props.onUpdateItem(this.props.item.id)
    }

    render() {
        var {id, name, status} = this.props.item
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td className="text-center">
                                        <span
                                            className={status ? 'label label-success' : 'label label-danger'}
                                            onClick={this.onChangeStatus}
                                        >
                                            {status ? 'Kích Hoạt' : 'Ẩn'}
                                                </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }

}

export default TaskItem;
