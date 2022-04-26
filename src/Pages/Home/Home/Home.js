import React from 'react';
import Banner from './Banner/Banner';
import Faq from './FAQ/Faq';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;