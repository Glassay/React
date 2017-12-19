/**
 * 2017-12-18 Jifeng Cheng
 * 单个文章简要展示
 */

import React from 'react';
import { Card } from 'semantic-ui-react';

class Article extends React.Component {
  render() {
    return (
      <Card.Group>
        <Card
          fluid
          href="#card-example-link-card"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
        <Card
          fluid
          header="Option 1"
          description={[
            'Rick is a genius scientist whose alcoholism and reckless,',
            ' nihilistic behavior are a source of concern for his family',
          ].join('')}
        />
      </Card.Group>
    );
  }
}

export default Article;
