/**
 * 2017-12-18 Jifeng Cheng
 * 单个文章简要展示
 */

import React from 'react';
import { Card } from 'semantic-ui-react';

class ArticleInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      article: [
        {
          header: '1',
          meta: '1',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
        },
        {
          header: '2',
          meta: '2',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
        },
        {
          header: '3',
          meta: '3',
          description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
        },
      ],
    };
  }
  render() {
    return (
      <Card.Group>
        {
          this.state.article.map(item => (
            <Card
              fluid
              href="#card-example-link-card"
              header={item.header}
              meta={item.meta}
              description={item.description}
            />
          ))
        }
      </Card.Group>
    );
  }
}

export default ArticleInfo;
