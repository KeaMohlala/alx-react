import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WithLogging from "./WithLogging";

// Mock console.log
const originalConsoleLog = console.log;
console.log = jest.fn();

describe("WithLogging HOC", () => {
  afterEach(() => {
    // Restore the original console.log after each test
    console.log.mockClear();
  });

  afterAll(() => {
    // Restore the original console.log after all tests are done
    console.log = originalConsoleLog;
  });

  test("logs on mount and unmount with pure HTML element", () => {
    const WrappedComponent = WithLogging(() => <p>Hello, world!</p>);

    const { unmount } = render(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith("Component Component is mounted");

    unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component Component is going to unmount"
    );
  });

  test("logs on mount and unmount with Login component", () => {
    const Login = () => <p>Login Component</p>;
    const WrappedComponent = WithLogging(Login);

    const { unmount } = render(<WrappedComponent />);
    expect(console.log).toHaveBeenCalledWith("Component Login is mounted");

    unmount();
    expect(console.log).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
