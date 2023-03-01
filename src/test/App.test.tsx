import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

describe("Testing de Home page", () => {
  test("renders learn react link", () => {
    render(<App />);
    const element = screen.getByText(
      /Discover the best chefs & recipes from around the world/i
    );
    expect(element).toBeInTheDocument();
  });
});

jest.mock("react-router-dom");

describe("HomePage component", () => {
  it("navigates to the recipes page when the button is clicked", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(<Home />);
    const button = screen.getByRole("button", { name: /bon appétit/i });
    button.click();

    expect(navigateMock).toHaveBeenCalledWith("/recipes");
  });
});
