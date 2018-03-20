import React from 'react';
import { connect } from 'dva';
import styles from './leftNav.css';

function leftNav() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>我是left</h1>
      <ul>
          <li>haha</li>
          <li>xixi</li>
      </ul>
    </div>
  );
}

leftNav.propTypes = {
};

export default connect()(leftNav);