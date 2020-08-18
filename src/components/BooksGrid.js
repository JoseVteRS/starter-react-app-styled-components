import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BookItem } from './BookItem'
import { booksStartLoading } from '../state/actions/books'

export const BooksGrid = () => {
  const dispatch = useDispatch()
  const { books } = useSelector((state) => state.library)

  useEffect(() => {
    dispatch(booksStartLoading())
  }, [dispatch])

  return (
    <div className='asdf'>
      {books.map((book) => (
        <BookItem
          key={book._id}
          {...book}
          className='rounded overflow-hidden'
        />
      ))}
    </div>
  )
}
