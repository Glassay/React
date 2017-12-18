/**
 * 2017-12-18 Jifeng Cheng
 * 标签云组件
 */

import React from 'react';
import { Card } from 'semantic-ui-react';

class Tag extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content header="标签云" />
        {/* <Card.Content description={description} /> */}
        <Card.Content extra>
          4 Friends
        </Card.Content>
      </Card>
    );
  }
}

export default Tag;
