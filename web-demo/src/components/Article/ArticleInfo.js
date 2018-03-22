/**
 * 2017-12-18 Jifeng Cheng
 * the single article
 */

import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Card, Header, Image, Label, Button } from 'semantic-ui-react';
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
              className="sr"
            >
              <Image
                style={{ height: 250 }}
                src={item.src}
              />
              <Card.Content>
                <Header>{item.header}</Header>
                <div className={styles.type}>
                  {/* <div className="ui tag labels">
                    <a className="ui blue label">JavaScript</a>
                    <a className="ui violet label">数组</a>
                  </div> */}
                  <div>
                    <Label as="a" color="blue" tag>JavaScript</Label>
                    <Label as="a" color="violet" tag>数组</Label>
                  </div>
                  <div>-----2018-01-02</div>
                </div>
                <hr />
                <Card.Description
                  className={styles.over_article}
                >{item.description}
                </Card.Description>
                <Link to="article">
                  <Button
                    content="继续阅读"
                    color="black"
                  />
                </Link>
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
