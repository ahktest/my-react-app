import React from 'react'
import Book from './Book'
import {books} from './books'
//CSS
import './index.css'

function App() {
  return (
    <section className="booklist">
      {books.map(
        // book => <Book key={book.id} book={book} />
        book => <Book key={book.id} {...book} />
      )}
    </section>
  )
}

export default App
