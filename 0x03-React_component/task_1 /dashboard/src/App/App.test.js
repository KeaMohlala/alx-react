import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "..Notifications.test/Notifications/Notifications";

describe("App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it("contains the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it("contains the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it("does not render the Login component when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).length).toBe(0);
  });

  it("does not render the CourseList component when isLoggedIn is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it("renders the CourseList component when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it("renders the Login component when isLoggedIn is false", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(Login).length).toBe(1);
  });
  let mockLogOut;

  beforeEach(() => {
    mockLogOut = jest.fn();
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls logOut and shows alert when Control and h keys are pressed", () => {
    const wrapper = shallow(<App isLoggedIn={true} logOut={mockLogOut} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });

    document.dispatchEvent(event);

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(mockLogOut).toHaveBeenCalled();
  });
});
