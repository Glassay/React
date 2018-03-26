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
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522053615038&di=ea0660047ab07665c0c710d656bc9edd&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201511%2F12%2F20151112214424_RLGdi.jpeg"
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
