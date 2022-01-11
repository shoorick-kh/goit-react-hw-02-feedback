import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ params, addFeedback }) {
  return (
    <div className={s.container}>
      {Object.keys(params).map(key => (
        <button
          className={s.button}
          type="button"
          key={key}
          onClick={() => addFeedback(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  params: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  addFeedback: PropTypes.func.isRequired,
};
