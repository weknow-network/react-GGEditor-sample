import React from "react";
import { RegisterCommand, withPropsAPI } from "gg-editor";

// https://github.com/alibaba/GGEditor/issues/205

class SaveCommandImp extends React.Component {
  render() {
    const { propsAPI } = this.props;

    const config = {
      queue: true,

      enable(/* editor */) {
        return true;
      },

      execute(/* editor */) {
        console.log("Save");
        console.log("Save：", propsAPI);
      },

      // 反向命令逻辑
      back(/* editor */) {
        console.log("Save Back");
      },

      // 快捷按键配置
      shortcutCodes: [["metaKey", "s"], ["ctrlKey", "s"]]
    };

    return <RegisterCommand name="save" config={config} />;
  }
}

export const SaveCommand = withPropsAPI(SaveCommandImp);