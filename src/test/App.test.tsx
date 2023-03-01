import { render, screen } from "@testing-library/react";
import App from "../App";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

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
