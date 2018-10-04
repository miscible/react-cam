import React from "react";
import renderer from "react-test-renderer";
import Camera from "../Camera";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Camera />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
