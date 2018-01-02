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
              // data-aos="zoom-in-left"
              fluid
              key={item.key}
              style={{ marginTop: 10 }}
              className="sr"
            >
              <Image
                style={{ height: 250 }}
                src={item.src}
              />
              <Card.Content>
                <Header>{item.header}</Header>
                <div className={styles.type}>
                  <div className="ui tag labels">
                    <a className="ui blue label">JavaScript</a>
                    <a className="ui violet label">数组</a>
                  </div>
                  <div>-----2018-01-02</div>
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
