/**
 * 2017-12-18 Jifeng Cheng
 * the component of tag cloud
 */

import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import Label from '../components/Label/Label';

class Tag extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header as="h4" color="grey">
            <Icon name="send" />
            文章标签
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Label />
        </Card.Content>
      </Card>
    );
  }
}

export default Tag;
