/**
 * 2017-12-18 Jifeng Cheng
 * the single article
 */

import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import { connect } from 'dva';
import { Card, Header, Image, Label, Button, Icon } from 'semantic-ui-react';

import styles from './ArticleInfo.less';
import '../../../node_modules/highlight.js/styles/atom-one-dark.css';
import images from '../../utils/images';

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
  }
  render() {
    const { Article } = this.props;
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
                src={images.image[Math.floor(Math.random() * images.image.length)]}
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
                <Button
                  content="阅读全文"
                  color="black"
                  style={{
                    float: 'right',
                  }}
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

export default connect(({ article }) => ({
  ...article,
}))(ArticleInfo);
