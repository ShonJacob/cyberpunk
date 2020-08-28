import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ContentArea from '../ContentArea/contentarea';
import Footer from '../../components/Footer/footer';

import './Home.css';

class Home extends React.Component{
    render(){
        return (
            <div className='HomeContainer'>
                <NavBar />
                <ContentArea />
                <Footer />
            </div>
            
        );
    }
}

export default Home;