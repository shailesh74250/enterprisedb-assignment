import { render, screen } from "@testing-library/react";
import { PetsImg } from "../petsImg";

// eslint-disable-next-line no-undef
describe("Testing MeetingDetails component", () => {
  // eslint-disable-next-line no-undef
  test("renders MeetingDetails component", () => {
    render(<PetsImg />);
    screen.getByAltText("pets"); // throws an expception if the element cannot be found
  });
});
