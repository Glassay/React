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
  render() {
    const { allArticle } = this.props;
    return (
      <Card.Group>
        {
          allArticle.map(item => (
            <Card
              fluid
              key={item.key}
              style={{ marginTop: 10 }}
            >
              <Image
                style={{ height: 250 }}
                src={item.src}
              />
              <Card.Content>
                <Header>{item.header}</Header>
                <div>
                  <div>------2017-12-29</div>
                  <div className={styles.type}>JavaScript</div>
                </div>
                <hr />
                <Card.Description className={styles.over_article}>{item.description}</Card.Description>
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
