import "./Feedback.css";

export default function Feedback() {
  return (
    <div className="feedback">
      <div className="action-section">
        <span>X</span>
      </div>
      <div className="question">
        How likely are you to recommend FrontendPro to someone you know?
      </div>
      <div className="rating-container">Boxes</div>
      <div className="footer">
        <button className="btn cancel-btn">Cancel</button>
        <button className="btn submit-btn">Submit</button>
      </div>
    </div>
  );
}
