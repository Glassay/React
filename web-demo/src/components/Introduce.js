/**
 * 2017-12-18 Jifeng Cheng
 * the card of personal introduce
 */

import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

class Indroduce extends React.Component {
  render() {
    return (
      <Card>
        <Image
          src="http://2xtx.com/img/2017/07/f394270153.jpg"
        />
        <Card.Content>
          <Card.Meta>
            缘,妙不可言
          </Card.Meta>
          <Card.Description
            style={{ marginTop: 10 }}
          >
            <Icon className="mail outline" />
            chengjifeng0215@163.com
          </Card.Description>
          <Card.Description
            style={{ marginTop: 10 }}
          >
            <Icon className="google" />
            chengjifeng0215@gmail.com
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Indroduce;
