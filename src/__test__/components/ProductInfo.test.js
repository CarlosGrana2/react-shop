import React from "react";
import { mount, shallow } from "enzyme";
import ProductInfo from "../../components/ProductInfo";
import AppContext from "../../context/AppContext";
import ProductMock from "../../__mocks__/productMock";

describe("<ProductInfo />", () => {
  test("Render the component Product", () => {
    const product = shallow(
      <AppContext.Provider value={{ state: { cart: 0 } }}>
        <ProductInfo product={ProductMock} />
      </AppContext.Provider>
    );
    expect(product.length).toEqual(1);
  });

  test("Validate add to cart", () => {
    const handleAddToCart = jest.fn();
    const setToggleProduct = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ state: { cart: 0 } }}>
        <ProductInfo
          product={ProductMock}
          setToggleProduct={setToggleProduct}
          handleClick={handleAddToCart}
        />
      </AppContext.Provider>
    );
    wrapper.find("button").simulate("click");
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
