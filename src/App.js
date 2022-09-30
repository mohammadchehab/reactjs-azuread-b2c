import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import UserProfileTile from "./components/UserProfileTile";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

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
        <FeedbackForm/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
