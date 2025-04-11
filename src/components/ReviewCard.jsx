import React from "react";
import "./reviewCard.css";

const ReviewCard = ({ image, name, title, review }) => {
    return (
        <div className="col-lg-6 d-flex justify-content-center">
            <div className="review-card">
                <p className="epilogue-regular">{review}</p>
                <div className="reviewer">
                    <div className="reviewer-image">
                        <img src={image} alt="reviewer-profile" />
                    </div>
                    <div className="reviewer-info">
                        <p className="epilogue-semibold">{name}</p>
                        <p>{title}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;