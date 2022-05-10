import React from "react";
import { mount, shallow } from "enzyme";
import { create } from "react-test-renderer";
import Header from "../../components/Header";
import AppContext from "../../context/AppContext";

describe("<Header />", () => {
  test("Render the component header", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ state: { cart: 0 } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.length).toEqual(1);
  });

  test("Render the Navbar", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ state: { cart: 0 } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find(".navbar-left").length).toEqual(1);
    expect(wrapper.find(".navbar-right").length).toEqual(1);
  });
});

describe("Header Snapshot", () => {
  test("Validate UI the Header component", () => {
    const header = create(
      <AppContext.Provider value={{ state: { cart: 0 } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
