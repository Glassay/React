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
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from './BasicLayout.less';
import Introduce from '../components/Introduce';
import Article from '../components/Article';
import Pigeonhole from '../components/Pigeonhole';
import Tag from '../components/Tag';

export default class BasicLayout extends Component {

  render() {
    return (
      <div>
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
              content="Do whatever you want when you want to."
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Container
              textAlign="center"
              style={{ margin: '0em 30em' }}
            >
              <Button color="black" target="_blank" href="https://github.com/Glassay">Github</Button>
              <Button color="black" href="https://github.com/Glassay">e-mail</Button>
            </Container>
          </div>
        </Visibility>
        <h4 className="ui horizontal divider header"><i className="tag icon" /> Article </h4>

        <Segment style={{ padding: '2em 0em' }} vertical>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Article
                  style={{ width: 500 }}
                />
                <Header as="h3" style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that right, you thought it was th
                </p>
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
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
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
