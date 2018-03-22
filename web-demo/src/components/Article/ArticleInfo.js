/**
 * 2017-12-18 Jifeng Cheng
 * the single article
 */

import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Card, Header, Image, Label, Button } from 'semantic-ui-react';
import styles from './ArticleInfo.less';

class ArticleInfo extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/showArticle',
    });
    marked.setOptions({
      highlight: code => highlight.highlightAuto(code).value,
    });
  }
  render() {
    const image = [
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-543828.jpg',
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-267050.jpg',
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-16295.jpg',
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-267055.png',
    ];
    const { Article } = this.props;
    return (
      <Card.Group>
        {
          Article.data === undefined ? null : Article.data.map(item => (
            <Card
              fluid
              key={item.key}
              className="sr"
            >
              <Image
                style={{ height: 250 }}
                src={image[Math.floor(Math.random() * image.length)]}
              />
              <Card.Content>
                <Header>{item.Title}</Header>
                <div className={styles.type}>
                  <div>
                    <Label as="a" color="blue" tag>{item.Label1}</Label>
                    <Label as="a" color="violet" tag>{item.Label2}</Label>
                  </div>
                  <div>-----2018-01-02</div>
                </div>
                <hr />
                <Card.Description
                  dangerouslySetInnerHTML={{ __html: marked(item.Content) }}
                />
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
  Article: state.article.Article,
}))(ArticleInfo);
