import React, { Component } from 'react';
import Book from './Book'
// const Book=(props)=>{
//     return(

//    
//        
//      <tr key={props.book.id}>
//        
// <td>{props.book.id}</td>
//        
//      <td>{props.book.title}</td>
//        
// <td>{props.book.author}</td>
//        

//        
//      <td><button onClick={()=>{

//       this.deleteBook(props.book.id)


//        
//         }}>Delete</button></td>
//        
//         </tr>
// )
// }



class BookList extends Component {
    constructor() {
        super()
        this.state = {
            // id=0,
            books: [],
            book: {
                title: '',
                author: ''
            }
        }
    }

    onTitleChange = (e) => {
        var title = e.target.value;
        var book = Object.assign({}, this.state.book);
        book.title = title;
        this.setState({
            book
        })

    }


    onAuthorChange = (e) => {
        var author = e.target.value;
        var book = Object.assign({}, this.state.book);
        book.author = author;
        this.setState({
            book
        })
    }

    addBook = (e) => {

        e.preventDefault();
        var book = Object.assign({}, this.state.book)
        book.id = this.state.books.length + 1;
        this.setState({
            book
        }, () => {
            this.setState({
                books: [
                    ...this.state.books,
                    this.state.book
                ],
                book: {
                    // id=0,
                    title: '',
                    author: ''
                }
            })
        })
    }

    deleteBook = (id) => {
        var newBooks = this.state.books.filter((book) => {
            return book.id !== id;
        })

        this.setState({
            books: newBooks
        })
    }


    render() {
        return (
            <div>
                <h1>Books</h1>
                <label>title</label>
                <input type="text" name="title" value={this.state.book.title} onChange={this.onTitleChange}></input>
                <label>author</label>
                <input type="text" name="author" value={this.state.book.author} onChange={this.onAuthorChange}></input>
                <button onClick={this.addBook}>Add Book</button>
                <table border="true" table-border="true">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Delete?</th>
                        </tr>
                        {

                            this.state.books.map((book) => {
                                console.log(book.title)
                                console.log(book.rating)
                                return (
                                    <tr>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td><button onClick={() => {
                                            this.deleteBook(book.id)
                                        }}>Delete</button></td>
                                    </tr>
                                )
                                return (<Book key={book.id} book={book} />)
                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }

}


export default BookList;

