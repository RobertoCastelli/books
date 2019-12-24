import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid/v1'
export const BookContext = createContext()

const BookContextProvider = (props) => {

    const localStorageCheck = () => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : []
    }

    const [books, setBooks] = useState(localStorageCheck)

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]
    )

    return (
        <div>
            <BookContext.Provider value={{books, addBook, removeBook}}>
                { props.children }
            </BookContext.Provider>
        </div>
    )
}

export default BookContextProvider
