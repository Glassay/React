/**
 * 2017-12-18 Jifeng Cheng
 * 归档组件
 */

import React from 'react';
import { Card } from 'semantic-ui-react';

class Pigeonhole extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content header="归档" />
        {/* <Card.Content description={description} /> */}
        <Card.Content extra>
          4 Friends
        </Card.Content>
      </Card>
    );
  }
}

export default Pigeonhole;
