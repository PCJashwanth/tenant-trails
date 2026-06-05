import { createContext, useContext, useState } from "react";
import { seedReviews } from "../data/mockData";

const ReviewsContext = createContext();

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState(seedReviews);

  function addReview(apartmentId, userId, rating, body) {
    const newReview = {
      id: `r-${Date.now()}`,
      apartmentId,
      userId,
      rating,
      body,
      date: new Date().toISOString().slice(0, 10),
    };
    setReviews((prev) => [newReview, ...prev]);
    return newReview;
  }

  function updateReview(reviewId, rating, body) {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, rating, body } : r))
    );
  }

  function deleteReview(reviewId) {
    setReviews((prev) => prev.filter((r) => r.id !== reviewId));
  }

  function getReviewsForApartment(apartmentId) {
    return reviews.filter((r) => r.apartmentId === apartmentId);
  }

  function getReviewsByUser(userId) {
    return reviews.filter((r) => r.userId === userId);
  }

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        addReview,
        updateReview,
        deleteReview,
        getReviewsForApartment,
        getReviewsByUser,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useReviews() {
  return useContext(ReviewsContext);
}
