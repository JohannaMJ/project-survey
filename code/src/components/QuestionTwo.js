import React from 'react';

import Alert from './Alert';

const QuestionTwo = ({
  plantSkill,
  onPlantSkillChange,
  onStepChange,
  onEnter,
  alert,
  onPreviousQuestionChange,
  step,
}) => {
  return (
    <div className='form-container'>
      <form className='form-question'>
        <label className='label-text' htmlFor='plantSkill'>
          Describe your plant skills:
        </label>
        <select
          id={plantSkill}
          onChange={onPlantSkillChange}
          required
          value={plantSkill}
          onKeyPress={onEnter}
        >
          <option value='' disabled>
            Choose from the list:
          </option>
          <option value='Expert'>Gardening/Plant expert</option>
          <option value='Weekend gardener'>Weekend gardener</option>
          <option value='Happy enthusiast'>Happy plant enthusiast</option>
          <option value='No skills'>All my plants are dead :(</option>
        </select>

        {alert && <Alert />}
        <div className='button-container'>
          <button
            className='form-button'
            type='button'
            onClick={onPreviousQuestionChange}
          >
            Back
          </button>
          <button className='form-button' type='button' onClick={onStepChange}>
            Next
          </button>
        </div>
        <div className='progress-counter'>
          {step <= 5 && <p>Question: {step}/5</p>}
        </div>
      </form>
    </div>
  );
};

export default QuestionTwo;
