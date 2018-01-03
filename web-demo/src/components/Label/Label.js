/**
 * 2017-12-03 JiFeng Cheng
 * My blog's tag cloud
 */

import React from 'react';
import styles from './Label.less';

const Label = () => {
  return (
    <div className={styles.Label}>
      <a className="ui red label">JavaScript</a>
      <a className="ui orange label">React</a>
      <a className="ui yellow label">React Native</a>
      <a className="ui olive label">Angular</a>
      <a className="ui green label">Vue</a>
      <a className="ui teal label">Egg</a>
    </div>
  );
};

export default Label;

