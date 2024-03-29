import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleCreate}) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    if (text === "") {
      console.log("message is empty");
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(event.target.value);
  };

  const handleSubmit = (e)=> {
      e.preventDefault(); 
      if(!text.trim().length > 10)
      return;

      const newFeedback = {
        rating : rating,
        text : text 
      }

      handleCreate(newFeedback);
      setRating(10);
      setText("");
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the service?</h2>
        <RatingSelect select={(rating)=>  setRating(rating) }/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
