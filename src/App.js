import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import UserProfileTile from "./components/UserProfileTile";
import {v4 as uuidv4 } from  "uuid";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const addFeedback = (feedbackModel) => {
      feedbackModel.id = uuidv4();
      setFeedback([feedbackModel, ...feedback] );
  }

  const deleteFeedback = (id) => {
    if(!window.confirm("Are you sure you want to permenantly delete this record? This action cannot be undone!"))
        return;
    setFeedback(feedback.filter((it) => it.id !== id));
  };

  return (
    <>
      <Header />
      <UserProfileTile/>
      <div className="container">
        <FeedbackForm handleCreate={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
