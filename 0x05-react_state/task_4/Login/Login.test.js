import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Login from "./Login";

describe("Login component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("renders 2 input and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[type='email']").length).toBe(1);
    expect(wrapper.find("input[type='password']").length).toBe(1);
    expect(wrapper.find("label").length).toBe(2);
  });

  it("submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input[type='submit']").prop("disabled")).toBe(true);
  });

  it("submit button is enabled when both inputs are filled", () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find("input#email")
      .simulate("change", { target: { value: "test@test.com" } });
    wrapper
      .find("input#password")
      .simulate("change", { target: { value: "password123" } });
    expect(wrapper.find("input[type='submit']").prop("disabled")).toBe(false);
  });
});
