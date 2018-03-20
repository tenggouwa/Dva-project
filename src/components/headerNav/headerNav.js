import React from 'react';
import { connect } from 'dva';
import styles from './headerNav.css';

function headerNav() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>我是header</h1>
      <ul className={styles.ul}>
          <li>haha</li>
          <li>xixi</li>
      </ul>
    </div>
  );
}

headerNav.propTypes = {
};

export default connect()(headerNav);