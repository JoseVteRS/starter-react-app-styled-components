import React from 'react'
import { useDispatch } from 'react-redux'
import { setBookActive } from '../state/actions/books'

const sectionStyle = {
  backgroundImage:
    'linear-gradient(90deg, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.1) 100%)',
  borderRadius: '5px',
  overflow: 'hidden',
}
export const BookItem = ({ _id, title, coverUrl, author, genre }) => {
  const dispatch = useDispatch()

  const handleBook = () => {
    dispatch(setBookActive({ _id, title, coverUrl, author, genre }))
  }

  return (
    <>
      <div
        key={_id}
        onClick={handleBook}
        style={sectionStyle}
        className='relative pointer'
      >
        <img
          src={`${coverUrl}`}
          alt={title}
          className='rounded objec-fit w-full'
        />
      </div>
    </>
  )
}
