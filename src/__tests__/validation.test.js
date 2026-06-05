import { describe, it, expect } from "vitest";
import {
  validateLogin,
  validateSignup,
  validateReview,
} from "../utils/validation";

describe("validateLogin", () => {
  it("returns an error for an email without @", () => {
    const errors = validateLogin("notanemail", "password123");
    expect(errors.email).toBeDefined();
  });

  it("returns an error for a password shorter than 6 characters", () => {
    const errors = validateLogin("test@dal.ca", "abc");
    expect(errors.password).toBeDefined();
  });

  it("returns no errors for valid email and password", () => {
    const errors = validateLogin("test@dal.ca", "password123");
    expect(Object.keys(errors).length).toBe(0);
  });

  it("returns both errors when both fields are invalid", () => {
    const errors = validateLogin("", "");
    expect(errors.email).toBeDefined();
    expect(errors.password).toBeDefined();
  });
});

describe("validateSignup", () => {
  it("returns an error when the name is empty", () => {
    const errors = validateSignup("", "test@dal.ca", "password123", "password123");
    expect(errors.name).toBeDefined();
  });

  it("returns an error when passwords do not match", () => {
    const errors = validateSignup(
      "Jashwanth",
      "test@dal.ca",
      "password123",
      "different"
    );
    expect(errors.confirm).toBeDefined();
  });

  it("returns no errors for a valid signup", () => {
    const errors = validateSignup(
      "Jashwanth",
      "jash@dal.ca",
      "password123",
      "password123"
    );
    expect(Object.keys(errors).length).toBe(0);
  });
});

describe("validateReview", () => {
  it("returns an error when rating is zero", () => {
    const errors = validateReview(0, "Great place");
    expect(errors.rating).toBeDefined();
  });

  it("returns an error when body is empty", () => {
    const errors = validateReview(4, "   ");
    expect(errors.body).toBeDefined();
  });

  it("returns no errors for a valid review", () => {
    const errors = validateReview(5, "Lovely apartment.");
    expect(Object.keys(errors).length).toBe(0);
  });
});
