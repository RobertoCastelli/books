import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
     const { addBook }= useContext(BookContext)
     const [title, setTitle] = useState('')
     const [author, setAuthor] = useState('')
     const handleSubmit = e => {
        e.preventDefault()
        addBook(title, author)
        setTitle('')
        setAuthor('')
     }

    return(
        <div>
            <input onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="book" />
            <input onChange={e => setAuthor(e.target.value)} value={author} type="text" placeholder="author" />
            <button onClick={handleSubmit} type="submit">ADD BOOK</button>
        </div>
    )
}

export default BookForm