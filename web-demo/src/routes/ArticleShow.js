/**
 * 2017-12-29 Jifeng Cheng
 * 单个文章显示区域
 */

import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import {
  Header,
  Segment,
  Divider,
  Label,
} from 'semantic-ui-react';
import { connect } from 'dva';
import '../../node_modules/highlight.js/styles/atom-one-dark.css';
import styles from './ArticleShow.less';

class ArticleShow extends React.Component {
  componentWillMount() {
    marked.setOptions({
      highlight: code => highlight.highlightAuto(code).value,
    });
  }
  componentDidMount() {
    this.node.scrollIntoView();
  }
  render() {
    const { Article, keys } = this.props;
    return (
      <div ref={node => (this.node = node)} className={styles.bgImage}>
        {
          Article.data === undefined ? null :
          <Segment style={{ width: '80%', minHeight: '100vh', margin: 'auto', opacity: 0.9, backgroundColor: '#FBFBEA' }}>
            <Header>{Article.data[keys].Title}</Header>
            <div>
              <Label as="a" color="blue" tag>{Article.data[keys].Label1}</Label>
              <Label as="a" color="violet" tag>{Article.data[keys].Label2}</Label>
            </div>
            <Divider horizontal>2018-3-08</Divider>
            <div dangerouslySetInnerHTML={{ __html: marked(Article.data[keys].Content) }} />
          </Segment>
        }
      </div>
    );
  }
}

export default connect(({ article }) => ({
  ...article,
}))(ArticleShow);
