/**
 * 2017-12-03 JiFeng Cheng
 * My blog's tag cloud
 */

import React from 'react';
import { Label } from 'semantic-ui-react';

import colors from '../../utils/colors';
import styles from './Label.less';
import labels from '../../utils/labels';

export default class Labels extends React.Component {
  render() {
    return (
      <div className={styles.a}>
        {
          labels.map((item, index) => (
            <Label
              style={{
                display: 'inline-block',
                textAlign: 'center',
                margin: 5,
              }}
              color={colors[index]}
              size="large"
              key={index}
              content={item}
            />
          ))
        }
      </div>
    );
  }
}
