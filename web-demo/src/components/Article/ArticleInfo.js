/**
 * 2017-12-18 Jifeng Cheng
 * 单个文章简要展示
 */

import React from 'react';
import { connect } from 'dva';
import { Card, Header } from 'semantic-ui-react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image/Image';
import styles from './ArticleInfo.less';

class ArticleInfo extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    const { allArticle } = this.props;
    return (
      <Card.Group>
        {
          allArticle.map(item => (
            <div>
              <Card
                fluid
                href="#card-example-link-card"
                key={item.key}
                header={item.header}
                description={item.description}
                style={{ marginTop: 10 }}
              >
                {/* <div className={styles.bgimg}>
                  <Card.Content>
                    <Card.Header>{item.header}</Card.Header>
                  </Card.Content>
                </div>
                <Card.Content>
                  <Card.Description>{item.description}</Card.Description>
                </Card.Content> */}
              </Card>
            </div>
          ))
        }
      </Card.Group>
    );
  }
}

export default connect(state => ({
  allArticle: state.article.allArticle,
}))(ArticleInfo);
