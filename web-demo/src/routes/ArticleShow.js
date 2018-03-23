/**
 * 2017-12-29 Jifeng Cheng
 * 单个文章显示区域
 */

import React from 'react';
import marked from 'marked';
import highlight from 'highlight.js';
import {
  Header,
  Card,
  Container,
  Segment,
  Divider,
  Label,
} from 'semantic-ui-react';
import { connect } from 'dva';
// import styles from '../components/Article/ArticleInfo.less';
import '../../node_modules/highlight.js/styles/atom-one-dark.css';

class ArticleShow extends React.Component {
  // componentWillMount() {
  //   marked.setOptions({
  //     highlight: code => highlight.highlightAuto(code).value,
  //   });
  // }
  render() {
    const SingleArticle = this.props;
    return (
      <div>
        <Segment style={{ width: '80%', minHeight: '100vh', margin: 'auto' }}>
          <Header>{SingleArticle.Title}</Header>
          <div>
            <Label as="a" color="blue" tag>{SingleArticle.Label1}</Label>
            <Label as="a" color="violet" tag>{SingleArticle.Label2}</Label>
          </div>
          <Divider horizontal>2018-3-08</Divider>
          {/* <div dangerouslySetInnerHTML={{ __html: marked(SingleArticle.Content) }} /> */}
          <div>{SingleArticle.Contnet}</div>
        </Segment>
      </div>
    );
  }
}

export default connect(({ article }) => ({
  ...article,
}))(ArticleShow);
