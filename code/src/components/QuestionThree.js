import React from 'react';

const fruits = ['apple', 'melon', 'lemon'];

const QuestionThree = ({ fruit, onFruitChange, onStepChange }) => {
  return (
    <form>
      Favourite fruit:
      {fruits.map((frukt) => (
        <label key={frukt}>
          <input
            type='radio'
            value={frukt}
            onChange={onFruitChange}
            checked={fruit === frukt}
          />
          {frukt}
        </label>
      ))}
      <button className='form-button' onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default QuestionThree;