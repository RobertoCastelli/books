import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const { books } = useContext(BookContext)

    return books.length ? (
        <div>
            <ol>
                { books.map(book => {
                    return ( <BookDetails book={book} key={book.id} />)
                })}
            </ol>
        </div>
    ) : (<div className="no-books">No books to read</div>
        )
}

export default BookList