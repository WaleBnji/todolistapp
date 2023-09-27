// import React from 'react'
/* eslint-disable react/prop-types */
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className='mt-4'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className='fbc mt-3 border-t border-b px-1 md:p-2' >
            <p>{title}</p>
            <div className='fc'>
              <BiEdit onClick={() => editItem(id)} />
              <AiFillDelete onClick={() => removeItem(id)} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
