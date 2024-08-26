// NotificationItem.test.js

import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem />);
  });

  it("renders with type prop", () => {
    const wrapper = shallow(
      <NotificationItem type="default" value="Test" html={null} />
    );
    expect(wrapper.find('[data-notification-type="default"]').length).toBe(1);
  });

  it("renders with value prop", () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" value="Test" html={null} />
    );
    expect(wrapper.text()).toContain("Test");
  });

  it("renders with html prop", () => {
    const htmlContent = "<strong>Urgent requirement</strong>";
    const wrapper = shallow(
      <NotificationItem type="urgent" value="" html={htmlContent} />
    );
    expect(wrapper.html()).toContain(htmlContent);
  });
});
