import { render, screen } from "@testing-library/react";
import { InsertPets } from "../insertPets";

// eslint-disable-next-line no-undef
describe("Testing ScheduleMeeting component", () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => {
    window.matchMedia =
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      window.matchMedia ||
      function () {
        return {
          matches: false,
          addListener: function () {},
          removeListener: function () {},
        };
      };
  });
  // eslint-disable-next-line no-undef
  test("renders ScheduleMeeting component", () => {
    render(<InsertPets />);
    const enterDetails = screen.getByText(/Enter Pets/i);
    expect(enterDetails).toBeInTheDocument();
  });
});
