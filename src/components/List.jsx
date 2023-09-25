// import React from 'react'
/* eslint-disable react/prop-types */
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const List = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id}>
            <p>{title}</p>
            <div>
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
