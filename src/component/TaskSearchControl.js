import React from 'react';

class TaskSearchControl extends React.Component {
    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSearch = this.onHandleSearch.bind(this)
        this.state = {
            search: ''
        }
    }

    onHandleChange(e) {
        let value = e.target.value;
        this.setState({
            search: value
        });
    }

    onHandleSearch() {
        this.props.onSearch(this.state.search)
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="search"
                       onChange={this.onHandleChange}/>
                <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button" onClick={this.onHandleSearch}>
                                            <span className="fa fa-search mr-5"></span>Tìm
                            </button>
                            </span>
            </div>
        )
    }

}

export default TaskSearchControl;
