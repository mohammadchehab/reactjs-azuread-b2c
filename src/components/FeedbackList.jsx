import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import React from "react";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p> No feedback yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((it, index) => {
        return (
          <FeedbackItem
            key={it.id}
            item={it}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default FeedbackList;
