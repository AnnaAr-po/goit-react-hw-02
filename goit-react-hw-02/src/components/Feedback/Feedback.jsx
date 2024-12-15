import css from './Feedback.module.css'

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.feedback}>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
}
export default Feedback;