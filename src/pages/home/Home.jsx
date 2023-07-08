import React from 'react';
import HomeCenter from './HomeCenter';
import HomePick from './HomePick';
import HomeValue from './HomeValue';
import HomeContact from './HomeContact';
import Subscribe from './Subscribe';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className='Home'>
      <div className="landing">
        <HomeCenter></HomeCenter>
      </div>
      <div className="content">
        <div className="block">
          <HomePick></HomePick>
        </div>
        <div className="block top">
          <HomeValue></HomeValue>
        </div>
        <div className="block top">
          <HomeContact></HomeContact>
        </div>
        <div className="block top">
          <Subscribe></Subscribe>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home