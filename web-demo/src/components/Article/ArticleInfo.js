/**
 * 2017-12-18 Jifeng Cheng
 * 单个文章简要展示
 */

import React from 'react';
import { connect } from 'dva';
import { Card, Header } from 'semantic-ui-react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';
import styles from './ArticleInfo.less';

class ArticleInfo extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    const { allArticle } = this.props;
    return (
      <Card.Group>
        {
          allArticle.map(item => (
            <Card
              fluid
              href="#card-example-link-card"
              key={item.key}
              style={{ marginTop: 10 }}
            >
              <Image
                style={{ height: 250 }}
                src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-543828.jpg"
              />
              <Card.Content>
                <Header>{item.header}
                  <div className={styles.type}>JavaScript</div>
                </Header>
                <div>------2017-12-29</div>
                <hr />
                <Card.Description style={{ margin: 10 }}>{item.description}</Card.Description>
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    );
  }
}

export default connect(state => ({
  allArticle: state.article.allArticle,
}))(ArticleInfo);
