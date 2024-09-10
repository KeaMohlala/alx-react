import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("BodySection component", () => {
  it("renders correctly with the title and children props", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check that there is one h2 element and it contains the text "test title"
    expect(wrapper.find("h2").text()).toEqual("test title");

    // Check that there is one p element and it contains the text "test children node"
    expect(wrapper.find("p").text()).toEqual("test children node");
  });
});
