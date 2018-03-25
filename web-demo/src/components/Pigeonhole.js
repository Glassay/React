/**
 * 2017-12-18 Jifeng Cheng
 * 归档组件
 */

import React from 'react';
import { Card, Accordion, Icon } from 'semantic-ui-react';

class Pigeonhole extends React.Component {
  render() {
    const data = [2019, 2018, 2017];
    return (
      <Card>
        <Card.Content>
          <Card.Header as="h4">
            <Icon name="tags" />
            文章归档
          </Card.Header>
        </Card.Content>
        {
          data.map((item, index) => (
            <Accordion fluid styled key={index}>
              <Accordion.Title onClick={this.handleClick}>
                <Icon name="calendar" />
                {item}
              </Accordion.Title>
            </Accordion>
          ))
        }
      </Card>
    );
  }
}

export default Pigeonhole;
