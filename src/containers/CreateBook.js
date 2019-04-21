import React, { Component } from 'react';

class CreateBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            title: '',
            author: '',
            year: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.handleReset(e);
    }

    handleValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            id: 0,
            title: '',
            author: '',
            year: '',
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.book) {
            this.setState({
                id: nextProps.book.id,
                title: nextProps.book.title,
                author: nextProps.book.author,
                year: nextProps.book.year,
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text"
                                className="form-control"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleValueChange}                                
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input  type="text"
                                className="form-control"
                                name="author"
                                value={this.state.author}
                                onChange={this.handleValueChange}                                                                
                        />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input  type="text"
                                className="form-control"
                                name="year"
                                value={this.state.year}
                                onChange={this.handleValueChange}                                                                
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">{this.state.id ? 'Update': 'Add'}</button>
                        <button type="botton" onClick={this.handleReset}>Clear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateBook;