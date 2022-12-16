import { render, screen, fireEvent } from "@testing-library/react";
import { PetsForm } from "../petsForm";

// eslint-disable-next-line no-undef
describe("Testing UserDetails component", () => {
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
  test("renders UserDetails component", () => {
    render(<PetsForm />);
    const enterDetails = screen.getByText(/Enter Pets/i);
    expect(enterDetails).toBeInTheDocument();
  });
  // eslint-disable-next-line no-undef
  test("Name field exists in the registration form", () => {
    render(<PetsForm />);
    const petNameElement = screen.getByPlaceholderText("Pet");
    expect(petNameElement).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("Pet field should not be empty", async () => {
    render(<PetsForm />);
    const petElement = screen.getByPlaceholderText<HTMLInputElement>("Pet");
    fireEvent.change(petElement, { target: { value: "Purrsloud" } });
    expect(petElement.value).not.toBe("");
    expect(petElement.value).toBe("Purrsloud");
  });
  // eslint-disable-next-line no-undef
  test("Species field should not be empty", async () => {
    render(<PetsForm />);
    const emailElement =
      screen.getByPlaceholderText<HTMLInputElement>("Species");
    fireEvent.change(emailElement, {
      target: { value: "dog" },
    });
    expect(emailElement.value).not.toBe("");
    expect(emailElement.value).toBe("dog");
  });
});
