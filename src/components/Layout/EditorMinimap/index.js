import React from 'react';
import { Card } from 'antd';
import { Minimap } from 'gg-editor';

export const EditorMinimap = () => {
  return (
    <Card type="inner" size="small" title="Minimap" bordered={false}>
      <Minimap height={200} />
    </Card>
  );
};

