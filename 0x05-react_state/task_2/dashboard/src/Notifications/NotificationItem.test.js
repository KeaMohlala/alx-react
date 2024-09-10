import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

describe("NotificationItem component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<NotificationItem id={1} />);
  });

  it("renders with the correct style based on the type", () => {
    const wrapperDefault = shallow(<NotificationItem id={1} type="default" />);
    expect(wrapperDefault.find("li").prop("className")).toContain("default");

    const wrapperUrgent = shallow(<NotificationItem id={2} type="urgent" />);
    expect(wrapperUrgent.find("li").prop("className")).toContain("urgent");
  });

  it("calls markAsRead with the correct id when clicked", () => {
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem id={1} markAsRead={mockMarkAsRead} />
    );

    wrapper.find("li").simulate("click");
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });

  it("renders the correct content based on props", () => {
    const wrapperWithValue = shallow(
      <NotificationItem id={1} value="New message" />
    );
    expect(wrapperWithValue.find("li").text()).toBe("New message");

    const wrapperWithHtml = shallow(
      <NotificationItem id={2} html={{ __html: "<strong>Urgent</strong>" }} />
    );
    expect(wrapperWithHtml.find("li").html()).toContain(
      "<strong>Urgent</strong>"
    );
  });
});
