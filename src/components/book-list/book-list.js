import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'redux';

import { withBookstoreService } from './hoc';

import './book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreServices } = this.props;
        const data = bookstoreServices.getBooks();
        console.log(data);
    };



    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return { books };
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps)(BookList);