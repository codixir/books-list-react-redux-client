import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Books from './containers/Books';
import CreateBook from './containers/CreateBook';
import { createBook } from './actions/book.actions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null,
    };    

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(data) {
    this.setState({book: data});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="create-book-container">
          <CreateBook 
            onAdd={this.props.onAdd}
            book={this.state.book}
            />
        </div>
          <div className="books-table-container">
            <Books onEdit={this.onEdit}/>
          </div>  
        </div>              
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (book) => dispatch(createBook(book)),
  }
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(App);
