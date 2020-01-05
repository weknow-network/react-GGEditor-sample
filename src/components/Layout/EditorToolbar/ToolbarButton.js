import React from 'react';
import { Tooltip } from 'antd';
import { Command } from 'gg-editor';
import upperFirst from 'lodash/upperFirst';
import IconFont from '../../Common/IconFont';
import styles from './index.module.css';
import { Button } from 'antd';

export const ToolbarButton = (props) => {
  const { command, icon, text } = props;

  return (
    <Command name={command}>
      <Tooltip
        title={text || upperFirst(command)}
        placement="bottom"
        overlayClassName={styles.tooltip}
      >
        { command === 'save' ? <Button>{command}</Button> : <IconFont type={`icon-${icon || command}`} />  }
      </Tooltip>
    </Command>
  );
};