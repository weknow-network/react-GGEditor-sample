import React from "react";
import { RegisterCommand, withPropsAPI } from "gg-editor";
// https://github.com/alibaba/GGEditor/issues/205

const demoData = {
  nodes: [
    {
      type: "node",
      size: "250*70",
      shape: "flow-rect",
      label: "Color",
      x: 400,
      y: 250,
      id: "color",
      index: 2
    },
    {
      type: "node",
      size: "250*70",
      shape: "flow-rect",
      color: "red",
      label: "Red",
      x: 150,
      y: 50,
      id: "red",
      index: 1
    },
    {
      type: "node",
      size: "250*70",
      shape: "flow-rect",
      color: "blue",
      label: "Blue",
      x: 300,
      y: 500,
      id: "blue",
      index: 0
    },
    {
      type: "node",
      size: "250*70",
      shape: "flow-rect",
      color: "green",
      label: "Green",
      x: 800,
      y: 300,
      id: "green",
      index: 3
    }],
  edges: [
    {
      source: "color",
      sourceAnchor: 2,
      target: "blue",
      targetAnchor: 0,
      id: "color-blue",
      index: 1
    },
    {
      source: "color",
      sourceAnchor: 1,
      target: "green",
      targetAnchor: 3,
      id: "color-green",
      index: 2
    },
    {
      source: "color",
      sourceAnchor: 0,
      target: "red",
      targetAnchor: 2,
      id: "color-red",
      index: 3
    }
  ]
};

class LoadCommandImp extends React.Component {
  render() {
    const { propsAPI }: any = this.props;

    const config = {
      queue: true,

      enable(/* editor */) {
        return true;
      },

      execute(/* editor */) {
        const { read } = propsAPI;
        console.log("Load");
        console.log("Load：", propsAPI);

        console.log(read && read(demoData));
      },

      // 反向命令逻辑
      back(/* editor */) {
        console.log("Load Back");
      },

      // 快捷按键配置
      shortcutCodes: [["metaKey", "l"], ["ctrlKey", "l"]]
    };

    return <RegisterCommand name="load" config={config} />;
  }
}

export const LoadCommand = withPropsAPI(LoadCommandImp);