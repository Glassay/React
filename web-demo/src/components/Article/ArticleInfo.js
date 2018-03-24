/**
 * 2017-12-18 Jifeng Cheng
 * the single article
 */

import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';
import { Card, Header, Image, Label, Button, Icon } from 'semantic-ui-react';
import styles from './ArticleInfo.less';
import '../../../node_modules/highlight.js/styles/atom-one-dark.css';

class ArticleInfo extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/showArticle',
    });
    marked.setOptions({
      highlight: code => highlight.highlightAuto(code).value,
    });
  }
  readArticles = (id) => {
    this.props.dispatch({
      type: 'article/readMore',
      payload: id,
    });
    console.log('Id>>>>>>>', id);
  }
  render() {
    const image = [
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-543828.jpg',
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-267050.jpg',
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-16295.jpg',
      'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-267055.png',
    ];
    const { Article } = this.props;
    console.log('ABC', Article);
    return (
      <Card.Group>
        {
          Article.data === undefined ? null : Article.data.map((item, index) => (
            <Card
              fluid
              key={index}
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
                  <div>
                    <Icon name="calendar" />
                    <span>2018-01-02</span>
                  </div>
                </div>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: marked(item.Content) }} />
                {/* <Link to="article">
                  <Button
                    content="继续阅读"
                    color="black"
                    onClick={() => this.readArticle(item.Id)}
                  />
                </Link> */}
                <Button
                  content="继续阅读"
                  color="black"
                  onClick={() => this.readArticles(index)}
                />
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    );
  }
}

// export default connect(state => ({
//   Article: state.article.Article,
// }))(ArticleInfo);

export default connect(({ article }) => ({
  ...article,
}))(ArticleInfo);
