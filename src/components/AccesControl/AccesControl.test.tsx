import { render, screen } from "@testing-library/react";
import { AccesControlUnlogged } from "./AccesControl";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppSelector: () => ({ logged: mockLogged }),
}));

describe("Given a AccesController function", () => {
  describe("When its called when the user is not logged", () => {
    test("then it shoul navigate to /login", () => {
      render(
        <AccesControlUnlogged>
          <h1>hola</h1>
        </AccesControlUnlogged>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
  test("then it should render his children when the user is logged", () => {
    mockLogged = true;
    render(
      <AccesControlUnlogged>
        <h1>hola</h1>
      </AccesControlUnlogged>
    );

    const receivedElement = screen.getByRole("heading");

    expect(receivedElement).toBeInTheDocument();
  });
});
