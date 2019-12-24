import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'


const BookDetailes = ({ book }) => {
    const { removeBook } = useContext(BookContext)
    return (
    <li onClick={() => removeBook(book.id)}>
        <div>{book.title}</div>
        <div>{book.author}</div>
    </li>

    )  
}

export default BookDetailes
