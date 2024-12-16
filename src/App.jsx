
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import Description from './components/Description/Description.jsx';
import { useEffect, useState } from "react";
import css from './App.module.css'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.App}>
       <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  );
}


export default App
