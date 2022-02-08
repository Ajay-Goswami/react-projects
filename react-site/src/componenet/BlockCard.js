import React from 'react';

const BlockCard = (props) => {
    // console.log(properties);

  return (
  <div className='BlogCard'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <p>Like Count: 0</p>
      <button>Like</button>
  </div>
  )
};

export default BlockCard;
