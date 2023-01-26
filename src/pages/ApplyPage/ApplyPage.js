import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ApplyBanner from './ApplyBanner/ApplyBanner';
import Mission from './Mission/Mission';
import Orginagtion from './Orginagtion/Orginagtion';
import Performing from './Performing/Performing';
import Programs from './Programs/Programs';
import Solutions from './Solutions/Solutions';
import TalkToUs from './TalkToUs/TalkToUs';

const ApplyPage = () => {
     return (
          <div className=' max-w-screen-2xl mx-auto'>
               <ApplyBanner> </ApplyBanner>
               <Performing></Performing>
               <Orginagtion> </Orginagtion>
               <Mission> </Mission>
               <Programs> </Programs>
               <Solutions> </Solutions>
               <TalkToUs> </TalkToUs>
          </div>
     );
};

export default ApplyPage;