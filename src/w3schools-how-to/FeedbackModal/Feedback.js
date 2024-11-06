import "./Feedback.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function Feedback() {
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [ratingSelected, setRatingSelected] = useState(null);
  console.log(ratingSelected);
  return (
    <div className="feedback">
      <div className="action-section">
        <CloseIcon sx={{ fontSize: "34px" }} />
      </div>
      <div className="question">
        How likely are you to recommend this website to someone you know?
      </div>
      <div className="rating-container">
        {ratings.map((rating) => (
          <div
            key={rating}
            className={
              "rating-box " + (ratingSelected === rating ? "selected" : "")
            }
            onClick={(e) => {
              if (ratingSelected === rating) {
                setRatingSelected(null);
                return;
              }
              setRatingSelected(rating);
            }}
          >
            {rating}
          </div>
        ))}
      </div>
      <div className="labels">
        <div className={ratingSelected === ratings[0] ? "active" : ""}>
          Not likely at all
        </div>
        <div
          className={
            ratingSelected === ratings[ratings.length - 1] ? "active" : ""
          }
        >
          Extremely likely
        </div>
      </div>
      <div className="footer">
        <button className="btn cancel-btn">Cancel</button>
        <button className="btn submit-btn">Submit</button>
      </div>
    </div>
  );
}
