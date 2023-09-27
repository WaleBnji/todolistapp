// import React from 'react'
/* eslint-disable react/prop-types */
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const List = ({ items }) => {
  return (
    <div className='mt-4'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className='fbc mt-2'>
            <p>{title}</p>
            <div className='fc'>
              <BiEdit />
              <AiFillDelete />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
