import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
});

describe("Increment Counter", () => {
  test("count should increment by 1 if increment button is clicked", () => {
    render(<Counter initialCount={5} />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    fireEvent.click(incrementButton);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(6);
  });
});

describe("Decrement Counter", () => {
  test("count should decrement by 1 if decrement button is clicked", () => {
    render(<Counter initialCount={5} />);
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    fireEvent.click(decrementButton);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(4);
  });
});

describe("Restart Counter", () => {
  test("count should restart to 0 if restart button is clicked", () => {
    render(<Counter initialCount={5} />);
    const restartButton = screen.getByRole("button", { name: "Restart" });

    fireEvent.click(restartButton);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
});

describe("Switch Signs", () => {
  test("count should switch signs if switch sign button is clicked", () => {
    render(<Counter initialCount={5} />);
    const switchSigns = screen.getByRole("button", { name: "Switch Signs" });

    fireEvent.click(switchSigns);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(-5);
  });
});
