import React from 'react';
import HomeCenter from "../home/HomeCenter"
import HomePick from '../home/HomePick';
import HomeValue from '../home/HomeValue';
import HomeContact from '../home/HomeContact';
import Subscribe from '../home/Subscribe';
import Footer from "../Footer";

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