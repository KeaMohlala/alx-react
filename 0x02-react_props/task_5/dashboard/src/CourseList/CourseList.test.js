import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList component", () => {
  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  it("renders correctly with an empty listCourses prop", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find("CourseListRow").length).toEqual(3); // Includes the header rows
    expect(wrapper.find("CourseListRow").at(2).prop("textFirstCell")).toEqual(
      "No course available yet"
    );
  });

  it("renders correctly with a list of courses", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find("CourseListRow")).toHaveLength(4); // 2 header rows + 2 courses
  });
});
