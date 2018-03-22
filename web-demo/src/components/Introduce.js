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
          src="http://78.media.tumblr.com/194a7ec366b93328ac338b9d34e4fc04/tumblr_okexnjx88P1qc4uvwo1_500.gif"
        />
        <Card.Content>
          <Card.Meta>
            缘,妙不可言！
          </Card.Meta>
          <Card.Content
            style={{ marginTop: 10 }}
          >
            <Icon className="mail outline" />
            chengjifeng0215@163.com
          </Card.Content>
          <Card.Content
            style={{ marginTop: 10 }}
          >
            <Icon className="google" />
            chengjifeng0215@gmail.com
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default Indroduce;
