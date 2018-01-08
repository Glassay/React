/**
 * 2017-12-29 Jifeng Cheng
 * 单个文章显示区域
 */

import React from 'react';
import { Card, Image, Header } from 'semantic-ui-react';
import connect from 'dva';
import styles from '../components/Article/ArticleInfo.less';

const ArticleShow = () => {
  const { allArticle } = this.props;
  return (
    allArticle.map(item => (
      <div>
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
            <Header>{item.header}</Header>
            <div>
              <div>------2017-12-29</div>
              <div className={styles.type}>JavaScript</div>
            </div>
            <hr />
            <Card.Description>{item.description}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    ))
  );
};

export default connect(state => ({
  allArticle: state.article.allArticle,
}))(ArticleShow);
