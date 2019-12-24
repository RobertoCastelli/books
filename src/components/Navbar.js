import React, { useContext }from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    const { books } = useContext(BookContext)

    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <fieldset>
                <legend>powered by React & localStorage</legend>
                <p>currently you have <span>{ books.length }</span> books to read</p>
            </fieldset>
        </div>
    )
}

export default Navbar