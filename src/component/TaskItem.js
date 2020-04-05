import React from 'react';

class TaskItem extends React.Component {
    render() {
        var {id, name, status} = this.props.item
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td className="text-center">
                                        <span className={status ? 'label label-success' : 'label label-danger'}>
                                            {status ? 'Kích Hoạt' : 'Ẩn'}
                                                </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }

}

export default TaskItem;
