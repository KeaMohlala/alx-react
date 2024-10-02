import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import AppContext from "../App/AppContext";

describe("Header component", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("does not show logout section when user is not logged in", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection").length).toBe(0);
  });

  it("shows logout section when user is logged in", () => {
    const user = {
      email: "test@test.com",
      password: "password",
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").length).toBe(1);
  });

  it("calls logOut when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const user = {
      email: "test@test.com",
      password: "password",
      isLoggedIn: true,
    };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find("a").simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });
});
