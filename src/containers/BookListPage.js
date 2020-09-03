import React, { Component } from 'react'
import Header from '../components/Header'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
class BookListPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BookList></BookList>
                <Footer></Footer>
            </React.Fragment>

        )
    }
}
export default BookListPage;