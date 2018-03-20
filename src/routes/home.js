import React from 'react';
import { connect } from 'dva';
import styles from './home.css';
import LeftNav from '../components/leftNav/leftNav'
import HeaderNav from '../components/headerNav/headerNav'

function Home() {
  return (
    <div className={styles.normal}>
      <HeaderNav/>
      <LeftNav/>
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);