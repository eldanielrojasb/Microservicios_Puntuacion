import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import "./RatingModal.css";

const RatingModal = ({ movie, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="movie-title">{movie.title}</h2>
        <img
          src={movie.image || "https://via.placeholder.com/300x150"}
          alt={movie.title}
          className="movie-image"
        />

        <div className="stars-container">
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <StarIcon
                key={index}
                className={`star ${
                  currentRating <= (hover || rating) ? "selected" : "unselected"
                }`}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(currentRating)}
              />
            );
          })}
        </div>

        <textarea
          className="comment-box"
          placeholder="Comments..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className="modal-buttons">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn-confirm"
            onClick={() => onSubmit({ rating, comment })}
            disabled={rating === 0}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
