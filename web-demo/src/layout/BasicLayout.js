/**
 * 2017-12-16 Jifeng Cheng
 */

import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Visibility,
  Menu,
  Input,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import { Switch, Route } from 'dva/router';
import styles from './BasicLayout.css';
import Introduce from '../components/Introduce';
import ArticleInfo from '../components/Article/ArticleInfo';
import Pigeonhole from '../components/Pigeonhole';
import Tag from '../components/Tag';

const FixedMenu = () => (
  <Menu fixed="top" size="large" inverted pointing>
    <Container>
      <Menu.Item as="a" active>首页</Menu.Item>
      <Menu.Item as="a">留言板</Menu.Item>
      <Menu.Item as="a">Github</Menu.Item>
      <Menu.Menu position="right">
        <Input icon="search" placeholder="Search..." />
      </Menu.Menu>
    </Container>
  </Menu>
);

export default class BasicLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state;
    return (
      <div className={styles.bgcolor}>
        { visible ? <FixedMenu /> : null }
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <div
            style={{ minHeight: 500, padding: '1em 0em' }}
            className={styles.bgimage}
          >
            <Header
              as="h1"
              textAlign="center"
              style={{ marginTop: '3em' }}
            >
              <Image className={styles.head} src="http://2xtx.com/img/2017/07/f394270153.jpg" />
            </Header>
            <Header
              as="h1"
              textAlign="center"
              content="Cease to struggle and you cease to live"
              inverted
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0 }}
            />
            <Header
              as="h2"
              textAlign="center"
              content="Do whatever you want when you want to"
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Container
              textAlign="center"
              style={{ margin: '0em 30em' }}
            >
              <Button color="black" target="_blank" href="https://github.com/Glassay">Github</Button>
              <Button color="black" target="_blank" href="mailto:chengjifeng0215@163.com">e-mail</Button>
            </Container>
          </div>
        </Visibility>
        <h4 className="ui horizontal divider header"><i className="tag icon" /> Article </h4>

        <Segment style={{ padding: '2em 0em' }} vertical>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <ArticleInfo />
              </Grid.Column>
              <Grid.Column floated="right" width={4}>
                <Introduce />
                <Pigeonhole />
                <Tag />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="不错的网站" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="友情链接" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the foote</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
