import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ReviewCard from "../components/ReviewCard";

describe("ReviewCard", () => {
  const sampleReview = {
    id: "r-test-1",
    apartmentId: 1,
    userId: "u-james",
    rating: 4,
    body: "Lovely building with responsive management.",
    date: "2026-04-02",
  };

  it("renders the review body text", () => {
    render(<ReviewCard review={sampleReview} />);
    expect(
      screen.getByText("Lovely building with responsive management.")
    ).toBeInTheDocument();
  });

  it("renders the author name from mock authors", () => {
    render(<ReviewCard review={sampleReview} />);
    // mockAuthors["u-james"] is "James Chen"
    expect(screen.getByText("James Chen")).toBeInTheDocument();
  });

  it("renders the formatted date", () => {
    render(<ReviewCard review={sampleReview} />);
    expect(screen.getByText("Apr 2, 2026")).toBeInTheDocument();
  });

  it("shows the (you) badge when the review belongs to the current user", () => {
    render(<ReviewCard review={sampleReview} currentUserId="u-james" />);
    expect(screen.getByText(/\(you\)/)).toBeInTheDocument();
  });

  it("does not show the (you) badge for other users", () => {
    render(<ReviewCard review={sampleReview} currentUserId="u-alex" />);
    expect(screen.queryByText(/\(you\)/)).not.toBeInTheDocument();
  });

  it("renders the star rating with accessible label", () => {
    render(<ReviewCard review={sampleReview} />);
    expect(
      screen.getByLabelText("4 out of 5 stars")
    ).toBeInTheDocument();
  });
});
