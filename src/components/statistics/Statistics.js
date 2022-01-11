import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  params,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <ul className={s.list}>
      {Object.entries(params).map(([key, value]) => (
        <li className={s.item} key={key}>
          {key} : {value}
        </li>
      ))}
      <li className={s.item}>Total: {totalFeedback}</li>
      <li className={s.item}>
        Positive feedback: {positiveFeedbackPercentage}%
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  params: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  totalFeedback: PropTypes.func.isRequired,
  positiveFeedbackPercentage: PropTypes.func.isRequired,
};
