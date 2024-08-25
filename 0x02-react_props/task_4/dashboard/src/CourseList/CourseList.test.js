import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders all rows correctly", () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find("tr");
    expect(rows).toHaveLength(5);

    rows.forEach((row, index) => {
      const cells = row.find("td, th");
      if (index === 0 || index === 1) {
        expect(cells).toHaveLength(2);
      } else {
        expect(cells).toHaveLength(2);
      }
    });
  });
});
