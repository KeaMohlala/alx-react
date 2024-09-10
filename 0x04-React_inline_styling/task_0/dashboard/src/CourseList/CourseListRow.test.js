import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it("renders correctly when isHeader is true", () => {
    // Test case 1: isHeader is true, textSecondCell is null
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Test First Cell" />
    );

    expect(wrapper.find('th[colspan="2"]')).toHaveLength(1);
    expect(wrapper.find('th[colspan="2"]').text()).toBe("Test First Cell");
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#deb5b545"
    );

    // Test case 2: isHeader is true, textSecondCell is present
    const wrapper2 = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Test First Cell"
        textSecondCell="Test Second Cell"
      />
    );

    expect(wrapper2.find("th")).toHaveLength(2);
    expect(wrapper2.find("th").at(0).text()).toBe("Test First Cell");
    expect(wrapper2.find("th").at(1).text()).toBe("Test Second Cell");
    expect(wrapper2.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#deb5b545"
    );
  });

  it("renders correctly when isHeader is false", () => {
    // Test case 1: isHeader is false, textSecondCell is null
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Test First Cell" />
    );

    expect(wrapper.find("td")).toHaveLength(2);
    expect(wrapper.find("td").at(0).text()).toBe("Test First Cell");
    expect(wrapper.find("td").at(1).text()).toBe("");
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#f5f5f5ab"
    );

    // Test case 2: isHeader is false, textSecondCell is present
    const wrapper2 = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="Test First Cell"
        textSecondCell="Test Second Cell"
      />
    );

    expect(wrapper2.find("td")).toHaveLength(2);
    expect(wrapper2.find("td").at(0).text()).toBe("Test First Cell");
    expect(wrapper2.find("td").at(1).text()).toBe("Test Second Cell");
    expect(wrapper2.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#f5f5f5ab"
    );
  });
});
