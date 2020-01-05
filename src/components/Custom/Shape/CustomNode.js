import React from "react";
import { RegisterNode } from "gg-editor";

// https://codesandbox.io/s/4j62moqy0w

export const CustomNode = () => {
  const config = {
    draw(item) {
      const keyShape = this.drawKeyShape(item);

      const group = item.getGraphicGroup();
      const model = item.getModel();

      group.addShape("image", {
        attrs: {
          x: -15,
          y: -25,
          width: 30,
          height: 30,
          img: model.icon
        }
      });

      this.drawLabel(item);

      return keyShape;
    },

    anchor: [
      [0.5, 0], 
      [0.5, 1] 
    ]
  };

  return (
    <RegisterNode name="custom-node" config={config} extend={"flow-circle"} />
  );
}



