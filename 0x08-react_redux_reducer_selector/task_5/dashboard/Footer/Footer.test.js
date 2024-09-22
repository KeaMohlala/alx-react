import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

describe("Footer component", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes("Copyright")).toBe(true);
  });

  it("does not display the contact link when user is logged out", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").length).toBe(0);
  });

  it("displays the contact link when user is logged in", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").text()).toEqual("Contact us");
  });
});
