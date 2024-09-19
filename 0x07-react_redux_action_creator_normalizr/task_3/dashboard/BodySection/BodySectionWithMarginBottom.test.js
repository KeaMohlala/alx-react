import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders a BodySection component and passes the correct props", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check that it renders one BodySection component
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Check that the title prop is passed correctly to the BodySection component
    expect(wrapper.find(BodySection).prop("title")).toEqual("test title");

    // Check that the children are passed correctly to the BodySection component
    expect(
      wrapper
        .find(BodySection)
        .children()
        .contains(<p>test children node</p>)
    ).toBe(true);
  });
});
