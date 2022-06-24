import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({ select }) => {
  let { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(10);

  useEffect(() => {
    if (feedbackEdit.editFlag) setSelected(feedbackEdit.item.rating);
    else setSelected(10);
  }, [feedbackEdit]);

  const handleChange = (event) => {
    // console.log({ event });
    // console.log(+event.currentTarget.value);

    setSelected(+event.currentTarget.value);
    select(+event.currentTarget.value);
  };

  return (
    <ul className='rating'>
      <li>
        <input type='radio' id='num1' value='1' name='rating' checked={selected === 1} onChange={handleChange} />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input type='radio' id='num2' value='2' name='rating' checked={selected === 2} onChange={handleChange} />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input type='radio' id='num3' value='3' name='rating' checked={selected === 3} onChange={handleChange} />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input type='radio' id='num4' value='4' name='rating' checked={selected === 4} onChange={handleChange} />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input type='radio' id='num5' value='5' name='rating' checked={selected === 5} onChange={handleChange} />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input type='radio' id='num6' value='6' name='rating' checked={selected === 6} onChange={handleChange} />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input type='radio' id='num7' value='7' name='rating' checked={selected === 7} onChange={handleChange} />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input type='radio' id='num8' value='8' name='rating' checked={selected === 8} onChange={handleChange} />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input type='radio' id='num9' value='9' name='rating' checked={selected === 9} onChange={handleChange} />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input type='radio' id='num10' value='10' name='rating' checked={selected === 10} onChange={handleChange} />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
