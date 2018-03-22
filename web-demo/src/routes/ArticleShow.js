/**
 * 2017-12-29 Jifeng Cheng
 * 单个文章显示区域
 */

import React from 'react';
import {
  Header,
  Card,
  Container,
  Segment,
  Divider,
  Label,
} from 'semantic-ui-react';
import connect from 'dva';
import styles from '../components/Article/ArticleInfo.less';

export default () => {
  return (
    <div>
      <Segment style={{ width: '80%', minHeight: '100vh', margin: 'auto' }}>
        <Header>标题</Header>
        <div>
          <Label as="a" color="blue" tag>JavaScript</Label>
          <Label as="a" color="violet" tag>数组</Label>
        </div>
        <Divider horizontal>2018-3-08</Divider>
        <p>虽然官网的TodoList的例子写的很详细，但是都是一步到位，就是给你一个action，好家伙，全部都写好了，给你一个reducer，所有功能也是都写好了，但是我们这些小白怎么可能一下就消化那么多，那我们就来拆解，一步一步实现，试想我们开发程序也是一个一个功能区域实现，那么我们第一步就是先把整体结构构思出来，然后先把头部做出来，这样看是不是简单很多！虽然官网的TodoList的例子写的很详细，但是都是一步到位，就是给你一个action，好家伙，全部都写好了，给你一个reducer，所有功能也是都写好了，但是我们这些小白怎么可能一下就消化那么多，那我们就来拆解，一步一步实现，试想我们开发程序也是一个一个功能区域实现，那么我们第一步就是先把整体结构构思出来，然后先把头部做出来，这样看是不是简单很多！虽然官网的TodoList的例子写的很详细，但是都是一步到位，就是给你一个action，好家伙，全部都写好了，给你一个reducer，所有功能也是都写好了，但是我们这些小白怎么可能一下就消化那么多，那我们就来拆解，一步一步实现，试想我们开发程序也是一个一个功能区域实现，那么我们第一步就是先把整体结构构思出来，然后先把头部做出来，这样看是不是简单很多！</p>
      </Segment>
    </div>
  );
};

// export default connect(state => ({
//   allArticle: state.article.allArticle,
// }))(ArticleShow);
